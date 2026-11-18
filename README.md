# Muse × Grok Bot 活用ガイド

2026/11/19 LT勉強会の発表資料。Muse(Meta)とGrok Bot(xAI)の基本・仕組み・実運用を
スライド形式で解説するサイト。全20枚。

- **公開URL**: https://mori-tt.github.io/muse-grokbot/
- **記事版**: `zenn-article.md`(Zenn用Markdown、コピペで投稿可能)

## 構成

- `src/slides.jsx` — 全スライドのコンテンツ(修正はここだけ)
- `src/App.jsx` — スライドデッキ(キー操作・ハッシュ遷移・一覧モード)
- `src/index.css` — テーマ色・アニメーション

## 操作

`←` `→` で移動 / `O` または `Esc` で一覧 / `#番号` で直リンク / スワイプ対応

## 開発

```bash
npm run dev      # 開発サーバー
npm run build    # 本番ビルド(dist/)
npm run preview  # ビルドのローカル確認
npm run lint     # oxlint
```

## デプロイ(GitHub Pages)

```bash
npm run build
npx gh-pages -d dist
```

`gh-pages`ブランチに`dist/`をpush → Pagesが`gh-pages`ブランチから配信。
`vite.config.js`の`base: './'`でサブパス対応済み。

## 出典

製品仕様はすべて一次情報で検証済み(詳細はスライド#19「出典・参考リンク」):
muse.ai / muse.ai/blog(設計・セキュリティ) / meta.com/help / stripe.com/newsroom /
x.ai/bot / x.ai/news/grok-bot-1-0 / docs.x.ai
