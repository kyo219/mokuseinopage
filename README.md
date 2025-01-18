# Astro Blog & Portfolio

このプロジェクトは、Astroを使用したブログ＆ポートフォリオサイトです。

## 🚀 プロジェクト構造

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── content/
│   │   ├── blog/     # ブログ記事
│   │   └── product/  # プロダクト記事
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 📝 コンテンツの編集方法

### 1. ディレクトリ構造

コンテンツは以下の2つのディレクトリで管理されています：

- `src/content/blog/`: ブログ記事用
- `src/content/product/`: プロダクト記事用

### 2. 記事の作成

#### ブログ記事の作成

`src/content/blog/` に新しいMarkdownファイルを作成します：

```markdown
---
title: "記事のタイトル"
date: 2024-01-01
tags: ["blog", "tech"]
description: "記事の説明文"
image: "メイン画像のURL"
images: [
  "画像1のURL",
  "画像2のURL"
]
---

# 記事の内容

ここに本文を書きます。
```

#### プロダクト記事の作成

`src/content/product/` に新しいMarkdownファイルを作成します：

```markdown
---
title: "プロダクト名"
date: 2024-01-01
status: "completed" # completed, in-progress, planned
tags: ["typescript", "react"]
description: "プロダクトの説明文"
image: "メイン画像のURL"
images: [
  "画像1のURL",
  "画像2のURL"
]
---

# プロダクトの説明

ここに詳細を書きます。
```

### 3. フロントマター

#### 共通の項目
- `title`: 記事のタイトル（必須）
- `date`: 投稿日（必須）
- `tags`: タグの配列（必須）
- `description`: 記事の説明文（必須）
- `image`: メイン画像のURL（オプション）
- `images`: 追加画像のURL配列（オプション）

#### プロダクト記事の追加項目
- `status`: プロダクトの状態（必須）
  - `completed`: 完成
  - `in-progress`: 開発中
  - `planned`: 計画中

### 4. 画像の追加

画像は以下の2つの方法で追加できます：

1. 外部URLを使用（推奨）
   ```markdown
   image: "https://example.com/image.jpg"
   ```

2. ローカル画像を使用
   - 画像を `public/images/` に配置
   - 参照は `/images/ファイル名` で行う
   ```markdown
   image: "/images/my-image.jpg"
   ```

## 🚀 ローカルでの開発とデプロイ

### 開発サーバーの起動

1. 依存関係のインストール
   ```bash
   npm install
   ```

2. 開発サーバーの起動
   ```bash
   npm run dev
   ```
   - サーバーが起動し、`http://localhost:4321` でアクセス可能
   - ファイルの変更は自動的に反映される

### ローカルでのビルドとプレビュー

1. プロダクションビルドの作成
   ```bash
   npm run build
   ```
   - ビルドされたファイルは `dist/` ディレクトリに出力される

2. ビルドのプレビュー
   ```bash
   npm run preview
   ```
   - `http://localhost:4321` でビルドされたサイトをプレビュー
   - 本番環境と同じ状態を確認可能

### デプロイ前の確認事項

1. ビルドの確認
   - `npm run build` でエラーが発生しないことを確認
   - 生成された `dist/` の内容を確認

2. プレビューでの動作確認
   - すべてのページが正しく表示されるか
   - リンクが正しく機能するか
   - 画像が適切に表示されるか
   - レスポンシブデザインの確認
   - パフォーマンスの確認

## 🚀 Cloudflareへのデプロイ手順

### 前提条件

1. GitHubアカウントを持っていること
2. Cloudflareアカウントを持っていること
3. プロジェクトがGitHubリポジトリで管理されていること

### Step 1: Cloudflare Pagesの設定

1. [Cloudflareダッシュボード](https://dash.cloudflare.com)にログイン
2. 左サイドバーから「Pages」を選択
3. 「Create a project」をクリック
4. 「Connect to Git」を選択

### Step 2: GitHubとの連携

1. 「Connect GitHub account」をクリック
2. GitHubの認証を行う
3. デプロイしたいリポジトリを選択
4. 「Begin setup」をクリック

### Step 3: ビルド設定

以下の設定を行います：

1. Project name: 任意のプロジェクト名
2. Production branch: `main`（または`master`）
3. Build settings:
   ```
   Build command: npm run build
   Build output directory: dist
   ```
4. Environment variables (必要な場合):
   - `NODE_VERSION`: `18`

### Step 4: フレームワーク固有の設定

Astroプロジェクトの場合、以下の設定を追加：

1. `astro.config.mjs`に以下の設定を追加（すでに存在する場合は不要）：
   ```javascript
   import { defineConfig } from 'astro/config';

   export default defineConfig({
     site: 'https://your-domain.pages.dev', // デプロイ後のドメインに更新
   });
   ```

### Step 5: デプロイの実行

1. 「Save and Deploy」をクリック
2. ビルドとデプロイのプロセスが開始
3. デプロイが完了すると、URLが発行される

### Step 6: カスタムドメインの設定（オプション）

1. Pagesプロジェクトの「Custom domains」セクションに移動
2. 「Set up a custom domain」をクリック
3. 使用したいドメインを入力
4. DNSレコードの設定を行う

### デプロイの更新

1. 変更をGitHubリポジトリにプッシュ
2. Cloudflare Pagesが自動的に新しいビルドを開始
3. デプロイが完了すると、自動的に更新される

### トラブルシューティング

ビルドに失敗した場合：

1. ビルドログを確認
2. 一般的な問題：
   - Node.jsバージョンの不一致
   - 依存関係のインストール失敗
   - ビルドコマンドの誤り
   - 環境変数の未設定

## 🧞 その他のコマンド

| コマンド                   | アクション                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 依存関係のインストール                                |
| `npm run dev`             | 開発サーバーを `localhost:4321` で起動              |
| `npm run build`           | プロダクション用にサイトをビルド `./dist/`           |
| `npm run preview`         | デプロイ前にビルドをプレビュー                        |
| `npm run astro ...`       | `astro add`, `astro check` などのCLIコマンドを実行 |

## 👀 詳細情報

- [Astroドキュメント](https://docs.astro.build)
- [Astroディスコード](https://astro.build/chat)
- [Cloudflare Pages ドキュメント](https://developers.cloudflare.com/pages)