<template>
  <header>
    <div class="banner-wrapper">
      <img
        alt="Vue logo"
        class="banner"
        src="../assets/endless-adventures-logo.jpg"
        width="400"
        height="300"
      />
    </div>

    <div class="wrapper">
      <p>
        Welcome to Endless Adventures! Your free travel agent service where the
        possibilities are endless! From hotels & concert tickets to overseas
        destination!
      </p>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.banner-wrapper {
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: fit-content;
  margin: 0 auto 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.banner {
  display: block;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.wrapper {
  margin-bottom: 1rem;
}

h1 {
  text-align: center;
  font-size: 48px;
}
</style>

<script>
export default {
  name: "Home",
};
</script>
