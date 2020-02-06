<template>
  <div class="table-responsive">
    <div class="text-left mt-4">
      <button class="btn btn-primary" @click="openModal(true)">
        建立新優惠券
      </button>
    </div>
    <table class="table mt-4 bg-white">
      <thead>
        <tr>
          <th>優惠券名稱</th>
          <th width="120">折扣率</th>
          <th width="150" class="text-center">到期日</th>
          <th width="120">啟用</th>
          <th width="160" class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date | date }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-secondary btn-sm mr-md-1"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="deleteModal(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->
    <Pagination :childPaginations="pagination" @changeCurrPage="getCoupons" />
    <!-- 新增/修改 Modal -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠券</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="title">優惠券名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="tempCoupon.title"
                    id="title"
                    placeholder="請輸入優惠券名稱"
                  />
                </div>
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="code">優惠碼</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="tempCoupon.code"
                    id="code"
                    placeholder="請輸入優惠碼"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="dueDate">到期日</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="due_date"
                      id="dueDate"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="percent">折扣百分比</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="tempCoupon.percent"
                      id="percent"
                      placeholder="請輸入折扣率"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      v-model="tempCoupon.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      type="checkbox"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除 Modal -->

    <div
      class="modal fade"
      id="delCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠券</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong>
            優惠券？(刪除後將無法恢復)
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delCoupon">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '../components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  computed: {
    pagination() {
      return this.$store.state.Coupons.pagination;
    },
    coupons() {
      return this.$store.state.Coupons.coupons;
    },
    due_date: {
      // 如果用 computed 會只有 getter 沒有 setter，就不能雙向綁定更改資料
      // 所以要改用這種方式註冊 getter 跟 setter
      get() {
        return this.$store.state.Coupons.due_date;
      },
      set(value) {
        this.$store.commit('DUEDATE', value);
      },
    },
    isNew() {
      return this.$store.state.Coupons.isNew;
    },
    tempCoupon() {
      return this.$store.state.Coupons.tempCoupon;
    },
  },
  methods: {
    getCoupons(page = 1) {
      this.$store.dispatch('getCoupons', page);
    },
    openModal(isNew, item) {
      this.$store.dispatch('openCouModal', { isNew, item });
      $('#couponModal').modal('show');
    },
    updateCoupon() {
      this.$store.dispatch('updateCoupon');
      $('#couponModal').modal('hide');
    },
    deleteModal(item) {
      this.$store.dispatch('deleteCouModal', item);
      $('#delCouponModal').modal('show');
    },
    delCoupon() {
      this.$store.dispatch('delCoupon');
      $('#delCouponModal').modal('hide');
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
