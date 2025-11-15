#!/usr/bin/env node

/**
 * ホームページのスクリーンショットを取得するスクリプト
 * Puppeteerを使用してNext.jsアプリのスクリーンショットを撮影します
 * 
 * 使用方法:
 * npm install -D puppeteer
 * node scripts/take-screenshot.js
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../screenshots');

// Puppeteerがインストールされているか確認
let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (error) {
  console.error('❌ Puppeteerがインストールされていません。');
  console.log('\nインストール方法:');
  console.log('  npm install -D puppeteer\n');
  process.exit(1);
}

/**
 * スクリーンショットを取得
 */
async function takeScreenshot(url, outputPath, options = {}) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    
    // ビューポートサイズを設定
    await page.setViewport({
      width: options.width || 1920,
      height: options.height || 1080,
      deviceScaleFactor: 2, // 高解像度
    });

    // ページに移動
    console.log(`📸 ${url} のスクリーンショットを取得中...`);
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // スクリーンショットを撮影
    await page.screenshot({
      path: outputPath,
      fullPage: options.fullPage !== false,
      type: 'png',
    });

    console.log(`✅ スクリーンショットを保存しました: ${outputPath}`);
  } finally {
    await browser.close();
  }
}

/**
 * メイン処理
 */
async function main() {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  const pages = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/collections', name: 'collections' },
    { path: '/contact', name: 'contact' },
    { path: '/gift', name: 'gift' },
    { path: '/journal', name: 'journal' },
  ];

  // 出力ディレクトリを作成
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('📋 スクリーンショット取得を開始します...\n');
  console.log(`ベースURL: ${baseUrl}\n`);

  // 各ページのスクリーンショットを取得
  for (const page of pages) {
    const url = `${baseUrl}${page.path}`;
    const outputPath = path.join(OUTPUT_DIR, `${page.name}.png`);

    try {
      await takeScreenshot(url, outputPath, {
        width: 1920,
        height: 1080,
        fullPage: true,
      });
    } catch (error) {
      console.error(`❌ ${page.name} のスクリーンショット取得に失敗しました:`, error.message);
    }
  }

  console.log('\n✅ すべてのスクリーンショット取得が完了しました！');
  console.log(`📁 保存先: ${OUTPUT_DIR}\n`);
  console.log('📖 Figmaへのインポート方法:');
  console.log('   1. Figmaでファイルを開く');
  console.log('   2. File → Import → スクリーンショット画像を選択');
  console.log('   3. または、ドラッグ&ドロップで画像を配置\n');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  takeScreenshot,
};

