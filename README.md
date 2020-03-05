
# 電商網站 —— 島津燒肉 Shimazu

> 為您獻上最上等的和牛肉品，這是一份 Vue CLI 3 前端電商練習。

![島津燒肉首頁](https://i.imgur.com/pXS0V8h.jpg)

## DEMO

<https://gretema.github.io/Shimazu/>

## 簡介

此作品為 Vue.js 前端練習，功能包含：

- 前台：
  - 電商展示（商品分類、單一商品介紹）
  - 商品收藏功能
  - 購物車
  - 優惠碼套用
  - 下單 / 結帳
- 後台：
  - 管理者登入
  - 商品管理（建立、更新、刪除）
  - 優惠碼管理（建立、更新、刪除）
  - 訂單列表

## 使用技術

- Vue Cli 3
- Vue Router
- Vue Components
- Vuex
- RESTful APIs
- RWD
- Bootstrap 4
- JavaScript（ES6、LocalStorage 等）
- SCSS
- ESlint Aribnb

## 使用 Vue-Plugin

- [Vue-axios](https://www.npmjs.com/package/vue-axios)
- [VeeValidate](https://logaretm.github.io/vee-validate/guide/basics.html#validation-provider)
- [Vue-loading-overlay](https://www.npmjs.com/package/vue-loading-overlay)

## 前端介紹

### 首頁畫面

![首頁畫面1](https://i.imgur.com/pXS0V8h.jpg)

點擊商品類別方格，畫面會往下滑動並顯示相對應的商品，此時畫面右下角會出現「回到最上方」按鈕。

![首頁商品卡片](https://i.imgur.com/Kn1KS1U.jpg)

### 商品列表

![商品列表](https://i.imgur.com/jnRy7fn.jpg)

點擊整張商品卡片或是點擊「查看更多」，可跳轉至單一商品介紹頁。

![收藏清單](https://i.imgur.com/t4CGoOy.jpg)

點擊商品卡片右上角的愛心可加入收藏清單，再點擊一次則移除。收藏清單顯示於頁面最上方的 Navbar，收藏清單 dropdown 內的品項可按下購物車按鈕以加入購物車。

### 單一商品介紹頁

<<<<<<< HEAD
![](https://i.imgur.com/sVkR7ae.jpg)

點擊整張商品卡片或是點擊「查看更多」，可跳轉至單一商品介紹頁。

![](https://i.imgur.com/t4CGoOy.jpg)

點擊商品卡片右上角的愛心可加入收藏清單，再點擊一次則移除。收藏清單顯示於頁面最上方的 Navbar，收藏清單 dropdown 內的品項可按下購物車按鈕以加入購物車。
### 單一商品介紹頁
![](https://i.imgur.com/w8cEVBP.jpg)
=======
![單一商品介紹](https://i.imgur.com/w8cEVBP.jpg)
>>>>>>> hotfix

「熱銷商品」區塊為隨機推薦，從所有商品中亂數抓取不重複之三個商品予以展示，點擊該區塊中的商品可跳轉至該商品介紹頁。

### 購物車

![購物車畫面](https://i.imgur.com/4qYx2cH.png)

此頁面可調整欲購買之商品數量，並可輸入優惠碼進行折扣，按下「下一步」即開始結帳程序。

![收件資訊頁](https://i.imgur.com/km66G3o.png)

![付款資訊頁](https://i.imgur.com/2f7nKVx.png)

![付款成功頁](https://i.imgur.com/RaBUlE8.jpg)

### 後台登入介面

![登入頁](https://i.imgur.com/w0Bv4w9.png)

### 後台管理介面

![後台產品列表](https://i.imgur.com/6EQkX4G.png)

![後台新增商品](https://i.imgur.com/23t60kY.png)

### 其餘更多細節部分，歡迎至 Demo 網站觀看

<https://gretema.github.io/Shimazu/>
