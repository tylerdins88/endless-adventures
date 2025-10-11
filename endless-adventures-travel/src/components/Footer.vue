<template>
  <footer class="footer-container">
    <div class="external-links">
      <a
        href="https://www.instagram.com/endlessadventureswithali/"
        target="_blank"
        rel="noopener"
        ><strong>Instagram</strong></a
      >
      <span> | </span>
    </div>

    <div class="text-center md:text-right text-sage-light text-sm">
      &copy; {{ new Date().getFullYear() }} Website by
      <span class="text-sage-base font-semibold">Web Warlocks</span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  background-color: goldenrod;
  border-top: 1px solid #ccc;
  margin-top: auto;
}
.external-links {
  font-size: 1.1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
