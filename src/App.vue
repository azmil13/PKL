<template>
  <Navbar />
  <router-view class="mt-2"></router-view>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default {
    components : {
      Navbar,
    },
  };
</script>