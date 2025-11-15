const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../../images');
const outputDir = path.join(__dirname, '../../images-organized');

// 出力ディレクトリを作成
const categories = {
  duplicates: 'duplicates',
  largeFiles: 'large-files',
  productImages: 'product-images',
  photos: 'photos',
  other: 'other'
};

Object.values(categories).forEach(cat => {
  const dir = path.join(outputDir, cat);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 画像ファイルを取得
function getImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
        const stats = fs.statSync(fullPath);
        files.push({
          name: item.name,
          path: fullPath,
          size: stats.size,
          sizeMB: (stats.size / (1024 * 1024)).toFixed(2)
        });
      }
    }
  }
  return files;
}

// 画像を分類
function categorizeImage(file) {
  const name = file.name.toLowerCase();
  
  // 重複ファイル
  if (name.includes(' 2.') || name.includes('(2)') || name.includes('(3)') || 
      name.includes('コピー') || name.includes('copy') || name.includes('のコピー')) {
    return 'duplicates';
  }
  
  // 大きなファイル（5MB以上）
  if (file.size > 5 * 1024 * 1024) {
    return 'largeFiles';
  }
  
  // カメラ写真
  if (name.startsWith('img_') || name.startsWith('dsc') || 
      name.startsWith('p') && /^\d/.test(name) || name.includes('photoro')) {
    return 'photos';
  }
  
  // 商品画像（日本語ファイル名）
  if (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(file.name)) {
    return 'productImages';
  }
  
  return 'other';
}

// メイン処理
const images = getImageFiles(imagesDir);
const categorized = {
  duplicates: [],
  largeFiles: [],
  productImages: [],
  photos: [],
  other: []
};

console.log(`\n📊 画像分析結果\n`);
console.log(`合計画像数: ${images.length}個\n`);

images.forEach(img => {
  const category = categorizeImage(img);
  categorized[category].push(img);
});

// 結果を表示
console.log('📁 カテゴリ別分類:');
console.log(`  🔄 重複ファイル: ${categorized.duplicates.length}個`);
console.log(`  📦 大きなファイル(5MB以上): ${categorized.largeFiles.length}個`);
console.log(`  🛍️  商品画像(日本語名): ${categorized.productImages.length}個`);
console.log(`  📷 カメラ写真: ${categorized.photos.length}個`);
console.log(`  📄 その他: ${categorized.other.length}個\n`);

// 大きなファイルの詳細
if (categorized.largeFiles.length > 0) {
  console.log('⚠️  大きなファイル（最適化推奨）:');
  categorized.largeFiles
    .sort((a, b) => b.size - a.size)
    .slice(0, 10)
    .forEach(img => {
      console.log(`  - ${img.name}: ${img.sizeMB}MB`);
    });
  console.log('');
}

// 重複ファイルの詳細
if (categorized.duplicates.length > 0) {
  console.log('🔄 重複ファイル候補:');
  categorized.duplicates.slice(0, 20).forEach(img => {
    console.log(`  - ${img.name}`);
  });
  console.log('');
}

// カテゴリ別のファイルリストを保存
Object.keys(categories).forEach(cat => {
  const filePath = path.join(outputDir, `${cat}-list.txt`);
  const list = categorized[cat]
    .map(img => `${img.name} (${img.sizeMB}MB)`)
    .join('\n');
  fs.writeFileSync(filePath, list);
  console.log(`✅ ${cat} リストを保存: ${filePath}`);
});

console.log(`\n📋 分類結果は ${outputDir} に保存されました。\n`);

