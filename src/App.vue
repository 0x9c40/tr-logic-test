<template>
  <div id="app">
    <div class="container">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  color: #094f64;
}

a {
  color: #094f64;
}

.container {
  display: block;
  width: 100%;
  max-width: 480px;
  margin: auto;
  padding: 16px;
}
</style>
