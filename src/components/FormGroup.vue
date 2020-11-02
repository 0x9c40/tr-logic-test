<template>
  <div class="form-group">
    <label class="form-group__label" :for="name">
      {{ label }}
    </label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="value"
      class="form-group__input"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "FormGroup",

  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style lang="scss">
.form-group {
  display: flex;
  margin-bottom: 16px;
  height: 32px;
  // color: $text-color-grey;
  font-size: 14px;

  &__label {
    width: 200px;
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  &__select {
    padding: 0 10px;
    border-radius: 0;
  }

  &__input {
    border-radius: 0;
    // border: 1px solid $color-grey;
    padding: 0 10px;
    // color: $text-color-grey;

    &--long {
      width: 400px;
    }

    &:focus {
      // outline: 1px solid $color-blue;
    }
  }
}
</style>