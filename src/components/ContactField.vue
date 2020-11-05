<template>
  <div class="contact-field">
    <div class="contact-field__label">{{ name }}</div>
    <div class="contact-field__value">{{ value }}</div>
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
  justify-content: space-between;
  margin-bottom: 16px;
  height: 32px;
  align-items: center;

  &__label {
    font-weight: bold;
  }

  &__value {
    width: 200px;
    padding: 0px 8px;
  }
}
</style>