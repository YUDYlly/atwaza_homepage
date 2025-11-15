#!/usr/bin/env node

/**
 * デザイントークンをJSON形式でエクスポートするスクリプト
 * Figmaの変数としてインポート可能な形式で出力します
 * 
 * 使用方法:
 * node scripts/export-design-tokens.js
 */

const fs = require('fs');
const path = require('path');

const CSS_FILE = path.join(__dirname, '../src/app/globals.css');
const OUTPUT_FILE = path.join(__dirname, '../design-tokens.json');

/**
 * CSSファイルからデザイントークンを抽出
 */
function extractTokensFromCSS() {
  const cssContent = fs.readFileSync(CSS_FILE, 'utf8');
  const tokens = {
    colors: {},
    spacing: {},
    typography: {},
    borderRadius: {},
    shadows: {},
  };

  // :rootセクションから変数を抽出
  const rootMatch = cssContent.match(/:root\s*\{([^}]*)\}/);
  if (!rootMatch) {
    console.error('❌ :rootセクションが見つかりませんでした');
    return null;
  }

  const rootContent = rootMatch[1];
  const varRegex = /--([^:]+):\s*([^;]+);/g;
  let match;

  while ((match = varRegex.exec(rootContent)) !== null) {
    const [, key, value] = match;
    const trimmedValue = value.trim();

    // カラー変数
    if (key.startsWith('color-') || key.startsWith('bg-')) {
      const colorKey = key.replace(/^(color-|bg-)/, '');
      tokens.colors[colorKey] = trimmedValue;
    }
    // スペーシング変数
    else if (key.startsWith('spacing-')) {
      const spacingKey = key.replace('spacing-', '');
      tokens.spacing[spacingKey] = trimmedValue;
    }
    // フォント変数
    else if (key.startsWith('font-')) {
      const fontKey = key.replace('font-', '');
      tokens.typography[fontKey] = trimmedValue.replace(/["']/g, '');
    }
    // ボーダー半径
    else if (key.startsWith('radius-')) {
      const radiusKey = key.replace('radius-', '');
      tokens.borderRadius[radiusKey] = trimmedValue;
    }
    // シャドウ
    else if (key.startsWith('shadow-')) {
      const shadowKey = key.replace('shadow-', '');
      tokens.shadows[shadowKey] = trimmedValue;
    }
  }

  return tokens;
}

/**
 * Figma変数形式に変換
 */
function convertToFigmaFormat(tokens) {
  const figmaVariables = {
    version: '1.0.0',
    name: '@waza Design Tokens',
    variables: {
      colors: {},
      spacing: {},
      typography: {},
      effects: {},
    },
  };

  // カラー変数をFigma形式に変換
  Object.entries(tokens.colors).forEach(([key, value]) => {
    // HEXカラーをRGBに変換
    if (value.startsWith('#')) {
      const hex = value.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      figmaVariables.variables.colors[key] = {
        r: r / 255,
        g: g / 255,
        b: b / 255,
        a: 1,
      };
    } else {
      figmaVariables.variables.colors[key] = value;
    }
  });

  // スペーシング変数をFigma形式に変換
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    const numValue = parseFloat(value.replace('px', ''));
    figmaVariables.variables.spacing[key] = {
      value: numValue,
      unit: 'px',
    };
  });

  // タイポグラフィ変数をFigma形式に変換
  Object.entries(tokens.typography).forEach(([key, value]) => {
    figmaVariables.variables.typography[key] = {
      fontFamily: value,
    };
  });

  // シャドウをFigma形式に変換
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    figmaVariables.variables.effects[key] = {
      type: 'dropShadow',
      value: value,
    };
  });

  return figmaVariables;
}

/**
 * メイン処理
 */
function main() {
  console.log('📋 デザイントークンのエクスポートを開始します...\n');

  // CSSからトークンを抽出
  const tokens = extractTokensFromCSS();
  if (!tokens) {
    process.exit(1);
  }

  console.log('✅ デザイントークンを抽出しました:');
  console.log(`   - カラー: ${Object.keys(tokens.colors).length}個`);
  console.log(`   - スペーシング: ${Object.keys(tokens.spacing).length}個`);
  console.log(`   - タイポグラフィ: ${Object.keys(tokens.typography).length}個`);
  console.log(`   - ボーダー半径: ${Object.keys(tokens.borderRadius).length}個`);
  console.log(`   - シャドウ: ${Object.keys(tokens.shadows).length}個\n`);

  // Figma形式に変換
  const figmaFormat = convertToFigmaFormat(tokens);

  // JSONファイルに出力
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(figmaFormat, null, 2), 'utf8');
  console.log(`✅ デザイントークンをエクスポートしました: ${OUTPUT_FILE}\n`);

  // 使用方法を表示
  console.log('📖 Figmaへのインポート方法:');
  console.log('   1. Figmaでファイルを開く');
  console.log('   2. Variables パネルを開く');
  console.log('   3. Import variables をクリック');
  console.log('   4. design-tokens.json を選択\n');

  // トークンのプレビューを表示
  console.log('📊 エクスポートされたトークンのプレビュー:');
  console.log(JSON.stringify(tokens, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = {
  extractTokensFromCSS,
  convertToFigmaFormat,
};

