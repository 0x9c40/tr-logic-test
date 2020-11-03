<template>
  <div class="contact-field">
    <div class="contact-field__key">{{ key }}</div>
    <div class="contact-field__val">{{ val }}</div>
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
    key() {
      return this.field[0];
    },

    val() {
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