import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/front/Front.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/Home.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: 'products/:productId',
        name: 'SingleProduct',
        component: () => import('../views/front/SingleProduct.vue'),
      },
      {
        path: 'signin',
        name: 'Login',
        component: () => import('../views/front/Login.vue'),
      },
    ],
  },

  {
    path: '/cart',
    component: () => import('../views/front/Checkout.vue'),
    children: [
      {
        path: '',
        name: 'Cart',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: 'customerinfo',
        name: 'CustomerInfo',
        component: () => import('../views/front/CustomerInfo.vue'),
      },
      {
        path: 'payment/:orderId',
        name: 'Payment',
        component: () => import('../views/front/Payment.vue'),
      },
      {
        path: 'paysuccess/:orderId',
        name: 'PaySuccess',
        component: () => import('../views/front/PaySuccess.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/back/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'DashProducts',
        component: () => import('../views/back/DashProducts.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'Coupon',
        component: () => import('../views/back/Coupon.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'DashOrders',
        component: () => import('../views/back/DashOrders.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
});

export default router;
