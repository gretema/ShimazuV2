<template>
  <div>
    <nav
      aria-label="Page navigation example"
      class="d-flex justify-content-center"
    >
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !childPaginations.has_pre }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="pageComponent(childPaginations.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in childPaginations.total_pages"
          :key="page"
          :class="{ active: childPaginations.current_page === page }"
        >
          <a class="page-link" href="#" @click.prevent="pageComponent(page)">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !childPaginations.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="pageComponent(childPaginations.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    childPaginations: {
      type: Object
    }
  },
  methods: {
    pageComponent(page) {
      this.$emit("changeCurrPage", page);
    }
  }
};
</script>
