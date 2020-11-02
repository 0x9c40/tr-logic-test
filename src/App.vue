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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  display: block;
  width: 100%;
  max-width: 480px;
  margin: auto;
  padding: 16px;
}
</style>
