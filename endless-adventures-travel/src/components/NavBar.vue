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
  <nav class="navbar fixed inset-x-0 top-0 z-50">
    <div class="flex justify-between items-center">
      <!-- Logo & Brand -->
      <RouterLink to="/" class="flex items-center">
        <img
          src="../assets/navbar-palm-trees.jpg"
          alt="Logo"
          class="logothumb"
        />
        <h1 class="font-normal text-base">
          <span style="font-family: 'Times New Roman', serif"> ENDLESS </span>
          <span class="adventures font-cursive"> Adventures </span>
        </h1>
      </RouterLink>

      <!-- Links (no spacing) -->
      <ul class="flex items-center list-none">
        <li v-for="link in navLinks" :key="link.path">
          <RouterLink :to="link.path" class="navLinks">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/travel", label: "Travel" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
  { path: "/about", label: "About" },
];
</script>

<style scoped>
a {
  color: navy;
}
.navbar {
  background-color: #b7d9f7;
  width: 100%;
}
.logothumb {
  margin-left: 50px;
  height: 100px;
  width: 100px;
}
h1 {
  margin-left: 50px;
}
.navLinks {
  background-color: #fff9c4;
  padding: 12px;
  border-radius: 24px;
  margin: 4px;
}
</style>
