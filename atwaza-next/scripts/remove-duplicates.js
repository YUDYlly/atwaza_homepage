const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../../images');

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
        files.push({
          name: item.name,
          path: fullPath,
          baseName: path.basename(item.name, ext)
        });
      }
    }
  }
  return files;
}

// 重複ファイルを特定
function findDuplicates(files) {
  const duplicates = [];
  const keep = [];
  
  files.forEach(file => {
    const name = file.name.toLowerCase();
    
    // 重複パターンをチェック
    const isDuplicate = 
      name.includes(' 2.') || 
      name.includes('(2)') || 
      name.includes('(3)') || 
      name.includes('(4)') ||
      name.includes('(5)') ||
      name.includes('コピー') || 
      name.includes('copy') || 
      name.includes('のコピー') ||
      name.includes(' copy') ||
      /copy\s*\d*\./i.test(name);
    
    if (isDuplicate) {
      duplicates.push(file);
    } else {
      keep.push(file);
    }
  });
  
  return { duplicates, keep };
}

// メイン処理
console.log('🔍 重複ファイルを検索中...\n');

const allFiles = getImageFiles(imagesDir);
const { duplicates, keep } = findDuplicates(allFiles);

console.log(`📊 検索結果:`);
console.log(`  総ファイル数: ${allFiles.length}個`);
console.log(`  重複ファイル: ${duplicates.length}個`);
console.log(`  保持ファイル: ${keep.length}個\n`);

if (duplicates.length === 0) {
  console.log('✅ 重複ファイルは見つかりませんでした。\n');
  process.exit(0);
}

// 削除するファイルのリストを表示
console.log('🗑️  削除対象ファイル:');
duplicates.slice(0, 20).forEach(file => {
  console.log(`  - ${file.name}`);
});
if (duplicates.length > 20) {
  console.log(`  ... 他 ${duplicates.length - 20}個`);
}
console.log('');

// 削除を実行
let deletedCount = 0;
let errorCount = 0;

duplicates.forEach(file => {
  try {
    fs.unlinkSync(file.path);
    deletedCount++;
  } catch (error) {
    console.error(`❌ 削除エラー: ${file.name} - ${error.message}`);
    errorCount++;
  }
});

console.log('\n✅ 削除完了:');
console.log(`  削除成功: ${deletedCount}個`);
if (errorCount > 0) {
  console.log(`  削除失敗: ${errorCount}個`);
}
console.log(`  残りファイル: ${keep.length}個\n`);

// 削除されたファイルのリストを保存
const deletedListPath = path.join(__dirname, '../../images-organized/deleted-files.txt');
const deletedList = duplicates.map(f => f.name).join('\n');
fs.writeFileSync(deletedListPath, deletedList);
console.log(`📋 削除リストを保存: ${deletedListPath}\n`);

