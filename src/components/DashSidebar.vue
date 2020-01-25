<template>
  <div class="col-md-2 mt-4 mt-md-0">
    <nav class="bg-light sidebar">
      <div class="sidebar-sticky">
        <h5
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span class="mt-3">管理員</span>
          <a
            class="d-flex align-items-center text-muted"
            href="#"
            aria-label="Add a new report"
          >
            <span data-feather="plus-circle"></span>
          </a>
        </h5>
        <ul class="nav flex-column mb-2">
          <li
            class="nav-item"
            :class="{ active: activeStatus == 'dashProducts' }"
            @click="activeStatus = 'dashProducts'"
          >
            <router-link to="/admin/products" class="nav-link">
              <i class="fas fa-box-open"></i>產品列表
            </router-link>
          </li>
          <li
            class="nav-item"
            :class="{ active: activeStatus == 'dashOrders' }"
            @click="activeStatus = 'dashOrders'"
          >
            <router-link to="/admin/orders" class="nav-link">
              <i class="far fa-list-alt"></i>
              訂單列表
            </router-link>
          </li>
          <li
            class="nav-item"
            :class="{ active: activeStatus == 'coupons' }"
            @click="activeStatus = 'coupons'"
          >
            <router-link to="/admin/coupons" class="nav-link">
              <i class="fas fa-ticket-alt"></i>
              優惠券列表
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeStatus: "dashProducts"
    };
  }
};
</script>
