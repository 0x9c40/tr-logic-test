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
import { scrollbarWidth } from "@xobotyi/scrollbar-width";

export default {
  mounted() {
    let root = document.documentElement;
    document.addEventListener("readystatechange", () => {
      root.style.setProperty("--scrollbar-width", `${scrollbarWidth()}px`);
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

:root {
  --color-main: 9, 79, 100;
  --contacts-list-groups-padding: 32px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  color: var(--color-main);
}

a {
  color: var(--color-main);
}

.container {
  display: block;
  width: 100%;
  max-width: calc(480px + var(--contacts-list-groups-padding));
  margin: auto;
  padding: 16px;
}

@media (max-width: 420px) {
  :root {
    --contacts-list-groups-padding: 16px;
  }
}
</style>
