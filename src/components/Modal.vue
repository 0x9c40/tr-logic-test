<template>
  <div v-show="opened" class="modal" @click="$emit('close')">
    <div class="modal__content container" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  props: {
    opened: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);

  &__content {
    background: white;
    border-radius: 4px;
    margin-top: 20%;
  }
}
</style>