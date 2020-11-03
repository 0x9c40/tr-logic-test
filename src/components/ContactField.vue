<template>
  <div class="contact-field">
    <div class="contact-field__text">{{ name }}</div>
    <div class="contact-field__text">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "ContactField",

  props: {
    field: {
      type: Array,
      required: true,
    },
  },

  computed: {
    name() {
      return this.field[0];
    },

    value() {
      return this.field[1];
    },
  },
};
</script>

<style lang="scss">
.contact-field {
  display: flex;
}
</style>