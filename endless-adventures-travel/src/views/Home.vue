<template>
  <header>
    <div class="welcomeImage-wrapper">
      <img
        alt="Welcome Image"
        class="welcomeImage"
        src="../assets/endless-adventures-logo.jpg"
      />
    </div>
    <div class="welcome">
      <p>
        Welcome to Endless Adventures! Your free destinations agent service
        where the possibilities are endless! From hotels & concert tickets to
        overseas destination!
      </p>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.welcomeImage-wrapper {
  background-color: #b7d9f7;
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: fit-content;
  margin: 0 auto 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.welcomeImage {
  height: 400px;
  width: auto;
  display: block;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.welcome {
  margin-bottom: 1rem;
}

h1 {
  text-align: center;
  font-size: 48px;
}
</style>
