#!/usr/bin/env node

/**
 * FigmaデザイントークンをCSS変数に同期するスクリプト
 * 
 * 使用方法:
 * node scripts/sync-figma-tokens.js [FigmaファイルURL] [ノードID]
 * 
 * 例:
 * node scripts/sync-figma-tokens.js https://figma.com/design/abc123/Homepage 1:2
 */

const fs = require('fs');
const path = require('path');

// このスクリプトはFigma MCPツールと組み合わせて使用します
// Cursor内でFigma MCPを使用して変数を取得し、このスクリプトでCSSに反映します

const CSS_FILE = path.join(__dirname, '../src/app/globals.css');

/**
 * Figma変数をCSS変数に変換
 */
function convertFigmaVariablesToCSS(figmaVariables) {
  const cssVariables = {};
  
  // 色変数の変換
  if (figmaVariables.colors) {
    Object.entries(figmaVariables.colors).forEach(([key, value]) => {
      cssVariables[`--color-${key.toLowerCase()}`] = value;
    });
  }
  
  // スペーシング変数の変換
  if (figmaVariables.spacing) {
    Object.entries(figmaVariables.spacing).forEach(([key, value]) => {
      cssVariables[`--spacing-${key.toLowerCase()}`] = `${value}px`;
    });
  }
  
  // タイポグラフィ変数の変換
  if (figmaVariables.typography) {
    Object.entries(figmaVariables.typography).forEach(([key, value]) => {
      if (key === 'fontFamily') {
        cssVariables[`--font-${value.name.toLowerCase()}`] = value.value;
      }
    });
  }
  
  return cssVariables;
}

/**
 * CSSファイルの:rootセクションを更新
 */
function updateCSSVariables(cssVariables) {
  let cssContent = fs.readFileSync(CSS_FILE, 'utf8');
  
  // :rootセクションを見つけて更新
  const rootRegex = /:root\s*\{([^}]*)\}/;
  const rootMatch = cssContent.match(rootRegex);
  
  if (rootMatch) {
    let rootContent = rootMatch[1];
    
    // 既存の変数を更新または追加
    Object.entries(cssVariables).forEach(([key, value]) => {
      const varRegex = new RegExp(`(${key}\\s*:[^;]*)`, 'g');
      if (varRegex.test(rootContent)) {
        rootContent = rootContent.replace(varRegex, `${key}: ${value};`);
      } else {
        rootContent += `\n  ${key}: ${value};`;
      }
    });
    
    cssContent = cssContent.replace(rootRegex, `:root {${rootContent}\n}`);
    fs.writeFileSync(CSS_FILE, cssContent, 'utf8');
    console.log('✅ CSS変数を更新しました');
  } else {
    console.error('❌ :rootセクションが見つかりませんでした');
  }
}

// メイン処理
if (require.main === module) {
  const [fileUrl, nodeId] = process.argv.slice(2);
  
  if (!fileUrl) {
    console.log(`
使用方法:
  node scripts/sync-figma-tokens.js [FigmaファイルURL] [ノードID]

例:
  node scripts/sync-figma-tokens.js https://figma.com/design/abc123/Homepage 1:2

注意: このスクリプトはFigma MCPツールと組み合わせて使用してください。
Cursor内でFigma MCPを使用して変数を取得し、このスクリプトでCSSに反映します。
    `);
    process.exit(1);
  }
  
  console.log('📋 Figmaデザイントークンの同期を開始します...');
  console.log(`ファイルURL: ${fileUrl}`);
  if (nodeId) {
    console.log(`ノードID: ${nodeId}`);
  }
  
  // 実際の実装では、Figma MCPツールを使用して変数を取得します
  // ここでは例として空のオブジェクトを返します
  console.log('\n⚠️  このスクリプトはFigma MCPツールと組み合わせて使用してください。');
  console.log('Cursor内でFigma MCPを使用して変数を取得し、手動でCSSに反映してください。');
}

module.exports = {
  convertFigmaVariablesToCSS,
  updateCSSVariables,
};

