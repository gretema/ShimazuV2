<template>
  <div>
    <!--導覽列-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <!-- menu toggle button -->
        <button
          class="navbar-toggler d-flex align-items-center border-0 d-md-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <nav class="navbar navbar-dark bg-dark p-0">
          <router-link
            class="navbar-brand d-flex justify-content-center align-items-center mr-0"
            to="/"
          >
            <img
              src="../assets/images/iconfinder_Food_C225_2427885.svg"
              class="d-none d-md-inline-block mr-3"
              height="35"
              alt=""
            />
            <div class="d-inline-block d-flex flex-column">
              <h1 class="text-title mb-0" style="letter-spacing: 5px;">
                島津燒肉
              </h1>
              <span class="h6 align-self-center" style="letter-spacing: 5px;"
                >Shimazu</span
              >
            </div>
          </router-link>
        </nav>
        <!--購物車按鈕-->
        <div class="dropdown order-md-3">
          <button
            class="btn text-light btn-cart"
            data-toggle="dropdown"
            data-flip="false"
          >
            <i class="fas fa-shopping-cart"></i>
            <span class="badge badge-pill badge-danger">2</span>
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
            style="min-width: 300px;"
          >
            <div class="px-4 py-3">
              <h6>已選購商品</h6>
              <table class="table table-sm">
                <tbody>
                  <tr>
                    <td class="align-middle text-center">
                      <a
                        href="#removeModal"
                        class="text-muted"
                        data-toggle="modal"
                        data-target="#removeModal"
                        data-title="薩摩丁骨牛排 1 份"
                        data-backdrop="static"
                      >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </a>
                    </td>
                    <td class="align-middle">薩摩丁骨牛排</td>
                    <td class="align-middle">1 份</td>
                    <td class="align-middle text-center">$2,900</td>
                  </tr>
                  <tr>
                    <td class="align-middle text-center">
                      <a
                        href="#removeModal"
                        class="text-muted"
                        data-toggle="modal"
                        data-target="#removeModal"
                        data-title="飛驒牛燒烤片 1 份"
                        data-backdrop="static"
                      >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </a>
                    </td>
                    <td class="align-middle">飛驒牛燒烤片</td>
                    <td class="align-middle">1 份</td>
                    <td class="align-middle text-center">$1,800</td>
                  </tr>
                </tbody>
              </table>
              <a href="./cart.html" class="btn btn-block bg-primary text-white"
                >結帳去</a
              >
            </div>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">首頁 </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./product.html">肉品</a>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/signin"
                tabindex="-1"
                aria-disabled="true"
                >登入</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
