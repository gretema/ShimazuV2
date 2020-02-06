<template>
  <div class="table-responsive">
    <table class="table mt-4 bg-light" v-if="orders.length">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th width="120">Email</th>
          <th>購買項目</th>
          <th width="100">應付金額</th>
          <th width="100">付款</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in orders"
          :key="item.id"
          :class="{ 'text-secondary': !item.is_paid }"
        >
          <td>{{ item.create_at | date }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!--分頁-->
    <Pagination :childPaginations="pagination" @changeCurrPage="getOrders" />
  </div>
</template>

<script>
import Pagination from '../components/Pagination';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      orders: [],
      pagination: {},
    };
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      const vm = this;
      this.$store.commit('LOADING', true);
      this.$http.get(api).then((response) => {
        vm.$store.commit('LOADING', false);
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
