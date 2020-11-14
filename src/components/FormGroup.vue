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
  font-size: 14px;

  &__label {
    margin-bottom: 8px;
    font-weight: bold;
  }

  &__input {
    height: 32px;
    padding: 0 10px;
    border: 1px solid #777;
    border-radius: 4px;

    &--long {
      width: 400px;
    }
  }
}
</style>