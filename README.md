# 電商網站 —— 島津燒肉 Shimazu

## 專案說明

本專案初版建立於 2019.10，運用以下技術完成切版：

- Bootstrap 4
  - Flex 排版
  - Grid 排版
- SCSS
- 配合 Bootstrap 部分元件使用 jQuery 製作互動效果

二版建立於 2020.01，以初版為基礎，
運用 Vue.js / Vue CLI 3 / Vue Router / Vuex 製作 SPA 網站，
使本專案趨於完整。

初版程式碼放置在 master 分支，
二版程式碼放置在 develop 分支，
DEMO 是以 gh-pages 分支建立而成。

## 初版資料夾結構

- images
- js
- stylesheets
  - components
  - helpers
- 各頁面 HTML 檔

## 二版資料夾結構

- assets
  - components
  - helpers
  - images
- components
- filters
- router
- store
- views

## Clone Project

```
git clone https://github.com/gretema/Shimazu.git
```

## Install Vue CLI

若本身已經安裝過 Vue CLI 3 以上版本則可以忽略該行指令。
`npm install -g @vue/cli`

## Install package

`npm install`

## Develop mode

`npm run serve`

## Build mode

`npm run build // 此模式會重新產生 dist 資料夾`
