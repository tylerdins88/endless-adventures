<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="page-container">
    <NavBar />
    <main class="content-wrap">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.page-container {
  position: relative;
  min-height: 100%;
  padding-bottom: 60px;
  box-sizing: border-box;
}

.content-wrap {
  padding-top: 200px;
  padding-bottom: 200px;
}
</style>
