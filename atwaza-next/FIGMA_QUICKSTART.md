# 🚀 Figma連携クイックスタートガイド

コードで作ったホームページをFigmaに取り込む方法を3ステップで説明します。

## ⚡ 最も簡単な方法（推奨）

### ステップ1: 開発サーバーを起動

```bash
cd atwaza-next
npm run dev
```

サーバーが `http://localhost:3000` で起動します。

### ステップ2: Figmaプラグインをインストール

1. Figmaを開く
2. メニューから `Plugins` → `Browse plugins` を選択
3. `html.to.design` を検索してインストール

### ステップ3: プラグインでインポート

1. Figmaで `Plugins` → `html.to.design` を実行
2. URLに `http://localhost:3000` を入力
3. `Import` をクリック

**完了！** ホームページがFigmaに自動インポートされます。

---

## 📸 スクリーンショット方法

### ステップ1: Puppeteerをインストール

```bash
npm install -D puppeteer
```

### ステップ2: スクリーンショットを取得

```bash
npm run screenshot
```

すべてのページのスクリーンショットが `screenshots/` フォルダに保存されます。

### ステップ3: Figmaにインポート

1. Figmaでファイルを開く
2. `File` → `Import` → スクリーンショット画像を選択
3. または、ドラッグ&ドロップで画像を配置

---

## 🎨 デザイントークンのエクスポート

### ステップ1: トークンをエクスポート

```bash
npm run export-tokens
```

`design-tokens.json` が生成されます。

### ステップ2: Figmaにインポート

1. Figmaでファイルを開く
2. `Variables` パネルを開く（左側のパネル）
3. `Import variables` をクリック
4. `design-tokens.json` を選択

**完了！** カラー、スペーシング、フォントなどのデザイントークンがFigmaに反映されます。

---

## 📋 生成されるファイル

- `design-tokens.json` - デザイントークン（色、スペーシング、フォントなど）
- `screenshots/` - 各ページのスクリーンショット（`npm run screenshot` 実行後）

---

## 🔗 関連ドキュメント

詳細な情報は `FIGMA_INTEGRATION.md` を参照してください。

