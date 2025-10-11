<!-- <template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/travel">Travel</RouterLink>
      <RouterLink to="/testimonials">Testimonials</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.wrapper {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 1rem;
  max-width: fit-content;
  margin: 0 auto 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style> -->

<template>
  <nav class="bg-pale-gold text-white fixed inset-x-0 top-0 z-50">
    <div class="flex justify-between items-center m-0 p-0">
      <!-- Logo & Brand -->
      <RouterLink to="/" class="flex items-center m-0 p-0">
        <img src="../assets/palm-trees.jpg" alt="Logo" class="h-12 w-16" />
        <h1 class="m-0 p-0 font-normal text-base">Endless Adventures</h1>
      </RouterLink>

      <!-- Links (no spacing) -->
      <ul class="flex items-center list-none m-0 p-0 gap-0">
        <li v-for="link in navLinks" :key="link.path">
          <RouterLink
            :to="link.path"
            class="m-0 p-0 font-normal"
            :class="isActive(link.path) ? '' : ''"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const isActive = (path) => route.path === path;

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/travel", label: "Travel" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];
</script>

<style scoped></style>
