# Masonry Grid Layout

這是一個使用 Next.js 和 CSS Grid 實現的瀑布流布局專案。專案展示了如何使用現代的 CSS Grid 技術來創建響應式的瀑布流布局，特別適合展示不同尺寸的圖片內容。

## 專案動機

Masonry（瀑布流）布局是一種特殊的網格布局方式，其特點是能讓不同高度的元素自動填補空白空間，創造出視覺上緊湊且富有層次感的排列效果。

傳統的 CSS Grid 布局會在固定的行列結構中對齊元素，這可能導致不必要的空白。而 Masonry 布局則能讓元素根據其實際高度，自動填補前方元素留下的空隙，從而實現更有效的空間利用。

## 功能特點

- 使用 CSS Grid 實現的瀑布流布局
- 響應式設計，適應不同螢幕尺寸
- 自動計算每個項目所需的高度
- 優雅的圖片展示效果
- 支援暗色/亮色主題切換

## 技術棧

- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS
- CSS Grid Layout

## 專案結構

```
masonry-grid/
├── app/                    # Next.js 應用程式主目錄
├── components/            # React 組件
├── constants/            # 常數定義
├── utils/               # 工具函數
└── public/              # 靜態資源
```

## 主要實現方式

專案使用 CSS Grid 實現瀑布流布局，主要通過以下方式：

1. 使用 `grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))` 創建自適應的網格列
2. 通過 JavaScript 動態計算每個項目所需的高度
3. 使用 `grid-row-end: span X` 來控制每個項目跨越的行數

## 開始使用

1. 克隆專案：
```bash
git clone [repository-url]
```

2. 安裝依賴：
```bash
npm install
# 或
yarn install
```

3. 運行開發服務器：
```bash
npm run dev
# 或
yarn dev
```

4. 在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看結果

## 開發指南

- 修改 `app/page.tsx` 來更新頁面內容
- 調整 `app/globals.css` 中的樣式來改變布局
- 在 `constants/albumPhotos.ts` 中管理圖片數據
- 使用 `utils/masonry.ts` 中的函數來處理瀑布流布局的計算

## 部署

這個專案可以輕鬆部署到 Vercel 平台：

1. 將代碼推送到 GitHub
2. 在 Vercel 中導入專案
3. 自動部署完成

## 注意事項

這是一個實驗性質的 side project，主要用於學習和展示 CSS Grid 的應用。在實際的生產環境中，建議使用成熟的 Masonry 布局套件，例如：

- [masonry.js](https://masonry.desandro.com/)
- [react-masonry-css](https://www.npmjs.com/package/react-masonry-css)
- [masonry-layout](https://masonry.desandro.com/)
- [@egjs/react-grid](https://www.npmjs.com/package/@egjs/react-grid)

這些套件提供了更完整的功能支援和更好的效能優化。

## 授權

MIT License
