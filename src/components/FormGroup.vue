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
  flex-direction: column;
  margin-bottom: 16px;
  // color: $text-color-grey;
  font-size: 14px;

  &__label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  &__input {
    border-radius: 4px;
    border: 1px solid #777777;
    padding: 0 10px;
    height: 32px;
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