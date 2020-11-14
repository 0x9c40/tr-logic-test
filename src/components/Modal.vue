<template>
  <div v-show="opened" class="modal" @mousedown="$emit('close')">
    <div class="modal__content container" @mousedown.stop>
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

  data() {
    return {
      thereWasClickOnOutsideContentArea: false,
    };
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  padding: 32px;
  background: rgba(0, 0, 0, 0.3);
  cursor: auto;

  &__content {
    margin-top: 20%;
    background: white;
    border-radius: 4px;
  }
}
</style>