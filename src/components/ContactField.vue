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
  align-items: center;
  justify-content: space-between;
  height: 32px;
  margin-bottom: 16px;

  &__label {
    overflow: hidden;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__value {
    width: 200px;
    padding: 0 8px;
    border-bottom: 1px solid white;
  }
}
</style>