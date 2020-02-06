<template>
  <div>
    <Navbar />
    <main role="main">
      <router-view></router-view>
    </main>
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Subscribe from '../components/Subscribe.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Subscribe,
    Footer,
  },
};
</script>
