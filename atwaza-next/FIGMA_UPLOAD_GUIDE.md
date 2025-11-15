# Figma MCPを使用したコードのFigmaへの反映ガイド

このガイドでは、Figma MCPを使用してコードベースをFigmaに反映する方法を説明します。

## 📋 前提条件

- Figmaアカウントにログイン済み
- Figma MCPが設定済み（`.cursor/mcp.json`に設定）
- Next.js開発サーバーが起動可能

## 🚀 ステップ1: コードベース情報のエクスポート

まず、コードベースからデザインシステム情報をエクスポートします：

```bash
npm run upload-to-figma
```

これにより、以下のファイルが `figma-export/` ディレクトリに生成されます：

- `design-system.json` - Figma変数としてインポート可能な形式
- `DESIGN_SYSTEM.md` - デザインシステムの詳細ドキュメント

## 🎨 ステップ2: Figmaでデザインシステムを作成

### 2.1 新しいFigmaファイルを作成

1. Figmaで新しいファイルを作成
2. ファイル名を「@waza Design System」などに設定

### 2.2 デザイントークンをインポート

1. 左側のパネルで `Variables` を開く
2. `Import variables` をクリック
3. `figma-export/design-system.json` を選択
4. または、`design-tokens.json`（`npm run export-tokens`で生成）を使用

### 2.3 コンポーネントを作成

`DESIGN_SYSTEM.md` を参考に、以下のコンポーネントをFigmaで作成：

- **Header** - ヘッダーコンポーネント
- **Footer** - フッターコンポーネント
- **AnnouncementBar** - アナウンスバーコンポーネント
- **Button** - ボタンコンポーネント（primary, ghost）
- **Card** - カードコンポーネント

## 🔗 ステップ3: Figma MCPを使用した連携

### 3.1 既存のFigmaファイルがある場合

FigmaファイルのURLまたはノードIDを指定して、Figma MCPを使用できます：

```
Figmaファイル [URL] からデザインコンテキストを取得して、
現在のコードと比較してください。
```

### 3.2 スクリーンショットを取得

Figma MCPを使用して、Figmaデザインのスクリーンショットを取得：

```
Figmaファイル [fileKey] のノード [nodeId] の
スクリーンショットを取得してください。
```

### 3.3 デザイン変数を取得

Figmaの変数を取得して、コードのデザイントークンと比較：

```
Figmaファイル [fileKey] のノード [nodeId] の
変数定義を取得してください。
```

## 📝 ステップ4: コードとFigmaの同期

### 4.1 コードからFigmaへ（今回の方法）

1. `npm run upload-to-figma` を実行
2. 生成された `design-system.json` をFigmaにインポート
3. `DESIGN_SYSTEM.md` を参考にコンポーネントを作成

### 4.2 Figmaからコードへ

1. FigmaファイルのURLを提供
2. Figma MCPを使用してデザインコンテキストを取得
3. コードを更新

## 🛠️ 利用可能なコマンド

```bash
# デザイントークンをエクスポート
npm run export-tokens

# コードベース情報をFigma用にエクスポート
npm run upload-to-figma

# スクリーンショットを取得（Puppeteerが必要）
npm install -D puppeteer
npm run screenshot
```

## 📊 エクスポートされる情報

### デザイントークン
- **カラー**: 7個（body, section, primary, accent, text, muted, light）
- **スペーシング**: 5個（xs, sm, md, lg, xl）
- **タイポグラフィ**: 2個（heading, body）
- **ボーダー半径**: 1個（base）
- **シャドウ**: 1個（soft）

### コンポーネント
- Header.jsx
- Footer.jsx
- AnnouncementBar.jsx

### ページ構造
- `/` - ホームページ
- `/about` - 私たちについて
- `/collections` - 商品カテゴリ
- `/contact` - お問い合わせ
- `/gift` - ギフト
- `/journal` - 読みもの

## 🔄 継続的な同期

コードを更新したら、定期的に以下を実行：

```bash
npm run upload-to-figma
```

生成されたファイルをFigmaにインポートして、デザインシステムを更新します。

## 📖 参考リンク

- [Figma Variables ドキュメント](https://help.figma.com/hc/en-us/articles/15339657135383)
- [Figma MCP ドキュメント](https://www.figma.com/developers/api)
- [詳細な連携ガイド](./FIGMA_INTEGRATION.md)

