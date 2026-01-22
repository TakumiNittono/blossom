# blossom E-commerce Site

blossomファッションECサイトの大枠実装です。

## 技術スタック

- React 18
- TypeScript
- Vite
- Tailwind CSS

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## プロジェクト構造

```
src/
├── components/
│   ├── Header.tsx          # ヘッダーコンポーネント
│   ├── HeroSection.tsx     # ヒーローセクション
│   ├── NewArrivals.tsx     # 新着商品セクション
│   └── ProductCard.tsx     # 商品カードコンポーネント
├── App.tsx                 # メインアプリケーション
├── main.tsx                # エントリーポイント
└── index.css               # グローバルスタイル
```

## 機能

- レスポンシブヘッダー（ナビゲーション、ロゴ、ユーティリティアイコン）
- ヒーローセクション（大きな画像エリアとテキストオーバーレイ）
- 新着商品セクション（カテゴリフィルターと商品グリッド）
- 商品カード（ホバーエフェクト、NEW INバッジ、ウィッシュリスト機能）

## 今後の拡張

- 商品詳細ページ
- カート機能
- ユーザー認証
- 決済機能
- 商品検索機能
