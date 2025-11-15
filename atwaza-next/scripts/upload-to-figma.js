#!/usr/bin/env node

/**
 * コードベースの情報をFigmaに反映するためのスクリプト
 * 
 * このスクリプトは、コードの構造とデザイントークンを分析し、
 * Figmaで使用できる形式で出力します。
 * 
 * 使用方法:
 * node scripts/upload-to-figma.js
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../figma-export');
const CSS_FILE = path.join(__dirname, '../src/app/globals.css');
const COMPONENTS_DIR = path.join(__dirname, '../src/components');

/**
 * コンポーネント情報を収集
 */
function collectComponents() {
  const components = [];
  
  if (!fs.existsSync(COMPONENTS_DIR)) {
    return components;
  }

  const files = fs.readdirSync(COMPONENTS_DIR);
  
  files.forEach(file => {
    if (file.endsWith('.jsx') || file.endsWith('.js')) {
      const filePath = path.join(COMPONENTS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const componentName = file.replace(/\.(jsx|js)$/, '');
      
      // コンポーネントのpropsを抽出
      const propsMatch = content.match(/export\s+default\s+function\s+\w+\s*\([^)]*\)/);
      const props = propsMatch ? propsMatch[0] : '()';
      
      // 使用されているクラス名を抽出
      const classMatches = content.match(/className=["']([^"']+)["']/g) || [];
      const classes = classMatches.map(m => m.replace(/className=["']|["']/g, ''));
      
      components.push({
        name: componentName,
        file: file,
        props: props,
        classes: [...new Set(classes)], // 重複を削除
        path: filePath,
      });
    }
  });

  return components;
}

/**
 * ページ情報を収集
 */
function collectPages() {
  const pages = [];
  const pagesDir = path.join(__dirname, '../src/app');
  
  if (!fs.existsSync(pagesDir)) {
    return pages;
  }

  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath, path.join(basePath, item));
      } else if (item === 'page.js' || item === 'page.jsx') {
        const content = fs.readFileSync(itemPath, 'utf8');
        const route = basePath || '/';
        
        // 使用されているセクションを抽出
        const sectionMatches = content.match(/<section[^>]*className=["']([^"']+)["']/g) || [];
        const sections = sectionMatches.map(m => {
          const classMatch = m.match(/className=["']([^"']+)["']/);
          return classMatch ? classMatch[1] : '';
        }).filter(Boolean);
        
        pages.push({
          route: route,
          path: itemPath,
          sections: [...new Set(sections)],
        });
      }
    });
  }

  scanDirectory(pagesDir);
  return pages;
}

/**
 * CSS変数を抽出
 */
function extractCSSVariables() {
  const cssContent = fs.readFileSync(CSS_FILE, 'utf8');
  const variables = {
    colors: {},
    spacing: {},
    typography: {},
    borderRadius: {},
    shadows: {},
  };

  const rootMatch = cssContent.match(/:root\s*\{([^}]*)\}/);
  if (!rootMatch) {
    return variables;
  }

  const rootContent = rootMatch[1];
  const varRegex = /--([^:]+):\s*([^;]+);/g;
  let match;

  while ((match = varRegex.exec(rootContent)) !== null) {
    const [, key, value] = match;
    const trimmedValue = value.trim();

    if (key.startsWith('color-') || key.startsWith('bg-')) {
      const colorKey = key.replace(/^(color-|bg-)/, '');
      variables.colors[colorKey] = trimmedValue;
    } else if (key.startsWith('spacing-')) {
      const spacingKey = key.replace('spacing-', '');
      variables.spacing[spacingKey] = trimmedValue;
    } else if (key.startsWith('font-')) {
      const fontKey = key.replace('font-', '');
      variables.typography[fontKey] = trimmedValue.replace(/["']/g, '');
    } else if (key.startsWith('radius-')) {
      const radiusKey = key.replace('radius-', '');
      variables.borderRadius[radiusKey] = trimmedValue;
    } else if (key.startsWith('shadow-')) {
      const shadowKey = key.replace('shadow-', '');
      variables.shadows[shadowKey] = trimmedValue;
    }
  }

  return variables;
}

/**
 * Figma用のJSONを生成
 */
function generateFigmaJSON(components, pages, variables) {
  return {
    version: '1.0.0',
    name: '@waza Design System',
    description: 'Next.jsホームページのデザインシステム',
    tokens: {
      colors: Object.entries(variables.colors).map(([key, value]) => ({
        name: key,
        value: value,
        type: 'color',
      })),
      spacing: Object.entries(variables.spacing).map(([key, value]) => ({
        name: key,
        value: value,
        type: 'spacing',
      })),
      typography: Object.entries(variables.typography).map(([key, value]) => ({
        name: key,
        value: value,
        type: 'fontFamily',
      })),
    },
    components: components.map(comp => ({
      name: comp.name,
      file: comp.file,
      classes: comp.classes,
      description: `React component: ${comp.name}`,
    })),
    pages: pages.map(page => ({
      route: page.route,
      sections: page.sections,
      description: `Page route: ${page.route}`,
    })),
  };
}

/**
 * Markdownドキュメントを生成
 */
function generateMarkdownDoc(components, pages, variables) {
  let markdown = '# @waza Design System Documentation\n\n';
  markdown += 'このドキュメントは、Next.jsコードベースから自動生成されたデザインシステムの仕様です。\n\n';
  
  markdown += '## デザイントークン\n\n';
  
  markdown += '### カラー\n\n';
  Object.entries(variables.colors).forEach(([key, value]) => {
    markdown += `- **${key}**: \`${value}\`\n`;
  });
  
  markdown += '\n### スペーシング\n\n';
  Object.entries(variables.spacing).forEach(([key, value]) => {
    markdown += `- **${key}**: \`${value}\`\n`;
  });
  
  markdown += '\n### タイポグラフィ\n\n';
  Object.entries(variables.typography).forEach(([key, value]) => {
    markdown += `- **${key}**: \`${value}\`\n`;
  });
  
  markdown += '\n## コンポーネント\n\n';
  components.forEach(comp => {
    markdown += `### ${comp.name}\n\n`;
    markdown += `- **ファイル**: \`${comp.file}\`\n`;
    markdown += `- **使用クラス**: ${comp.classes.map(c => `\`${c}\``).join(', ')}\n\n`;
  });
  
  markdown += '\n## ページ構造\n\n';
  pages.forEach(page => {
    markdown += `### ${page.route || '/'}\n\n`;
    markdown += `- **セクション**: ${page.sections.map(s => `\`${s}\``).join(', ')}\n\n`;
  });
  
  return markdown;
}

/**
 * メイン処理
 */
function main() {
  console.log('📋 Figmaへのエクスポート準備を開始します...\n');

  // 出力ディレクトリを作成
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // データを収集
  console.log('📦 コンポーネント情報を収集中...');
  const components = collectComponents();
  console.log(`   ✅ ${components.length}個のコンポーネントを発見`);

  console.log('📄 ページ情報を収集中...');
  const pages = collectPages();
  console.log(`   ✅ ${pages.length}個のページを発見`);

  console.log('🎨 デザイントークンを抽出中...');
  const variables = extractCSSVariables();
  console.log(`   ✅ ${Object.keys(variables.colors).length}個のカラー変数`);
  console.log(`   ✅ ${Object.keys(variables.spacing).length}個のスペーシング変数`);
  console.log(`   ✅ ${Object.keys(variables.typography).length}個のタイポグラフィ変数`);

  // JSONを生成
  console.log('\n📝 Figma用JSONを生成中...');
  const figmaJSON = generateFigmaJSON(components, pages, variables);
  const jsonPath = path.join(OUTPUT_DIR, 'design-system.json');
  fs.writeFileSync(jsonPath, JSON.stringify(figmaJSON, null, 2), 'utf8');
  console.log(`   ✅ ${jsonPath}`);

  // Markdownドキュメントを生成
  console.log('📖 Markdownドキュメントを生成中...');
  const markdown = generateMarkdownDoc(components, pages, variables);
  const mdPath = path.join(OUTPUT_DIR, 'DESIGN_SYSTEM.md');
  fs.writeFileSync(mdPath, markdown, 'utf8');
  console.log(`   ✅ ${mdPath}`);

  console.log('\n✅ エクスポートが完了しました！\n');
  console.log('📖 次のステップ:');
  console.log('   1. Figmaで新しいファイルを作成');
  console.log('   2. Variables パネルで design-tokens.json をインポート');
  console.log('   3. DESIGN_SYSTEM.md を参考にコンポーネントを作成');
  console.log(`\n📁 出力先: ${OUTPUT_DIR}\n`);
}

if (require.main === module) {
  main();
}

module.exports = {
  collectComponents,
  collectPages,
  extractCSSVariables,
  generateFigmaJSON,
};

