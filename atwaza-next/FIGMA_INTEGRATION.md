# FigmaとNext.jsの連携ガイド

このドキュメントでは、FigmaデザインとNext.jsホームページを双方向に連携させる方法を説明します。

## 📋 目次

1. [コードからFigmaへ](#コードからfigmaへ) ⬅️ **ここから始める**
2. [Figmaからコードへ](#figmaからコードへ)
3. [双方向連携](#双方向連携)

## コードからFigmaへ

### 方法1: html.to.designプラグイン（推奨・最も簡単）

既存のNext.jsホームページをFigmaに自動インポートする方法です。

#### 手順

1. **Figmaでプラグインをインストール**
   - Figmaを開く
   - `Plugins` → `Browse plugins` → `html.to.design` を検索してインストール

2. **開発サーバーを起動**
   ```bash
   cd atwaza-next
   npm run dev
   ```
   - ローカルサーバーが `http://localhost:3000` で起動します

3. **プラグインでインポート**
   - Figmaで `Plugins` → `html.to.design` を実行
   - URLに `http://localhost:3000` を入力
   - または、デプロイ済みのURL（例: `https://your-domain.com`）を入力
   - `Import` をクリック

4. **結果**
   - ホームページのレイアウトがFigmaに自動生成されます
   - コンポーネントとして構造化されます

#### メリット
- ✅ 自動でHTML/CSSをFigmaに変換
- ✅ コンポーネント構造を保持
- ✅ スタイル情報も反映
- ✅ 無料で利用可能

### 方法2: スクリーンショット + 手動再現

#### 手順

1. **スクリーンショットを取得**
   ```bash
   # スクリーンショット取得スクリプトを使用
   npm run screenshot
   ```

2. **Figmaにインポート**
   - Figmaで新しいファイルを作成
   - `File` → `Import` → スクリーンショット画像を選択
   - または、ドラッグ&ドロップで画像を配置

3. **手動でデザインを再現**
   - スクリーンショットを参考に、Figmaコンポーネントを作成
   - デザイントークン（色、フォント、スペーシング）を設定

### 方法3: デザインシステムドキュメントの作成

コードのデザイントークンとコンポーネント情報をFigmaに反映するためのドキュメントを作成します。

#### デザイントークンのエクスポート

```bash
# デザイントークンをJSON形式でエクスポート
npm run export-tokens
```

生成される `design-tokens.json` をFigmaの変数としてインポートできます。

#### コンポーネント仕様書の作成

各コンポーネントの仕様をMarkdown形式で作成し、Figmaのコメントとして追加できます。

## Figmaからコードへ

### 1. Figmaからデザインを取得してコードに反映（推奨）
Figma MCPを使用して、Figmaのデザインを直接コードに反映します。

**手順：**
1. FigmaファイルのURLまたはノードIDを取得
2. Figma MCPツールを使用してデザインコンテキストを取得
3. デザイントークン（色、フォント、スペーシング）をCSS変数に反映
4. コンポーネント構造をReactコンポーネントに変換

### 2. Code Connect（双方向連携）
既存のコードコンポーネントをFigmaにリンクし、デザイナーと開発者が同じコンポーネントを参照できます。

**手順：**
1. `@figma/code-connect`パッケージをインストール
2. コンポーネントごとにCode Connectファイルを作成
3. Figmaでコンポーネントとコードをリンク

### 3. デザインシステムの同期
Figmaのデザイントークンを定期的にコードに同期します。

## 実装方法

### 方法1: Figma MCPを使用したデザイン取得

#### 必要な情報
- FigmaファイルのURL（例: `https://figma.com/design/[fileKey]/[fileName]`）
- または、ノードID（例: `1:2`）

#### 使用例

```bash
# Figmaファイルからデザインコンテキストを取得
# このコマンドはCursor内でFigma MCPツールを使用します
```

**Figma MCPツールの機能：**
- `get_design_context`: デザインからコードを生成
- `get_metadata`: ノードの構造を取得
- `get_variable_defs`: デザイン変数を取得
- `get_code_connect_map`: Code Connectマッピングを取得

### 方法2: Code Connectのセットアップ

#### インストール

```bash
npm install -D @figma/code-connect
```

#### 設定ファイルの作成

`figma.config.js`を作成：

```javascript
module.exports = {
  codeConnect: {
    enabled: true,
    outputDir: './figma-code-connect',
  },
};
```

#### コンポーネントマッピングの作成

各コンポーネントに対して、Figmaコンポーネントとのマッピングを作成します。

例: `figma-code-connect/Header.jsx.connect.ts`

```typescript
import { CodeConnect } from '@figma/code-connect';

export default CodeConnect({
  figmaNode: 'https://figma.com/file/[fileKey]/[componentId]',
  component: Header,
  variants: {
    // Figmaのバリアントとコードのpropsをマッピング
  },
});
```

### 方法3: デザイントークンの同期

#### Figma変数の取得

Figma MCPを使用してデザイン変数を取得：

```javascript
// Figmaから変数を取得してCSS変数に変換
const variables = await getVariableDefs(nodeId, fileKey);
```

#### CSS変数の自動更新

取得した変数を`globals.css`の`:root`に反映します。

## 実際の連携手順

### ステップ1: Figmaファイルの準備

1. Figmaでデザインファイルを開く
2. ファイルURLをコピー（例: `https://figma.com/design/abc123/Homepage`）
3. 連携したいコンポーネントのノードIDを取得

### ステップ2: デザインコンテキストの取得

Cursor内で以下を実行：

```
Figmaファイル [URL] からデザインコンテキストを取得して、
現在のNext.jsコードに反映してください。
```

### ステップ3: コードの更新

取得したデザインに基づいて：
- CSS変数を更新
- コンポーネント構造を調整
- スタイルを適用

## 現在のプロジェクト構成

### デザイントークン（`globals.css`）

```css
:root {
  --bg-body: #f7f3ed;
  --bg-section: #fffdf8;
  --color-primary: #6c7a55;
  --color-accent: #c99e63;
  --color-text: #3e3a34;
  --color-muted: #6f675e;
  --font-heading: "Noto Serif JP", serif;
  --font-body: "Noto Sans JP", sans-serif;
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 32px;
  --spacing-lg: 64px;
  --spacing-xl: 96px;
}
```

### コンポーネント構造

- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/AnnouncementBar.jsx`

### ページ構造

- `src/app/page.js` - ホームページ
- `src/app/about/page.js`
- `src/app/collections/page.js`
- `src/app/contact/page.js`
- `src/app/gift/page.js`
- `src/app/journal/page.js`

## 次のステップ

1. **FigmaファイルURLを提供**してください
2. 連携したいコンポーネントやページを指定してください
3. デザインシステムの同期方法を選択してください

## 参考リンク

- [Figma Code Connect ドキュメント](https://www.figma.com/plugin-docs/code-connect/)
- [Figma API ドキュメント](https://www.figma.com/developers/api)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

