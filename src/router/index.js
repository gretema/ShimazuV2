import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Products from "../views/Products.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/Cart.vue";
import CustomerInfo from "../views/CustomerInfo.vue";
import Payment from "../views/Payment.vue";
import PaySuccess from "../views/PaySuccess.vue";

import Dashboard from "../views/Dashboard.vue";
import DashProducts from "../views/DashProducts.vue";
import Coupon from "../views/Coupon.vue";
import DashOrders from "../views/DashOrders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/signin",
    name: "Login",
    component: Login
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/products/:productId",
    name: "SingleProduct",
    component: SingleProduct
  },
  {
    path: "/cart",
    component: Checkout,
    children: [
      {
        path: "",
        name: "Cart",
        component: Cart
      },
      {
        path: "customerinfo",
        name: "CustomerInfo",
        component: CustomerInfo
      },
      {
        path: "payment/:orderId",
        name: "Payment",
        component: Payment
      }
    ]
  },
  {
    path: "/paysuccess",
    name: "PaySuccess",
    component: PaySuccess
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "products",
        name: "DashProducts",
        component: DashProducts,
        meta: { requiresAuth: true }
      },
      {
        path: "coupons",
        name: "Coupon",
        component: Coupon,
        meta: { requiresAuth: true }
      },
      {
        path: "orders",
        name: "DashOrders",
        component: DashOrders,
        meta: { requiresAuth: true }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
