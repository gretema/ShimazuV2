import Vue from "vue";
import VueRouter from "vue-router";

// 路由懶加載：減少打包後的檔案體積
const Front = () => import("../views/Front.vue");
const Home = () => import("../views/Home.vue");
const Login = () => import("../views/Login.vue");
const Products = () => import("../views/Products.vue");
const SingleProduct = () => import("../views/SingleProduct.vue");
const Checkout = () => import("../views/Checkout.vue");
const Cart = () => import("../views/Cart.vue");
const CustomerInfo = () => import("../views/CustomerInfo.vue");
const Payment = () => import("../views/Payment.vue");
const PaySuccess = () => import("../views/PaySuccess.vue");

const Dashboard = () => import("../views/Dashboard.vue");
const DashProducts = () => import("../views/DashProducts.vue");
const Coupon = () => import("../views/Coupon.vue");
const DashOrders = () => import("../views/DashOrders.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Front,
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      },
      {
        path: "products",
        name: "Products",
        component: Products
      },
      {
        path: "products/:productId",
        name: "SingleProduct",
        component: SingleProduct
      },
      {
        path: "signin",
        name: "Login",
        component: Login
      }
    ]
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
      },
      {
        path: "paysuccess/:orderId",
        name: "PaySuccess",
        component: PaySuccess
      }
    ]
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
