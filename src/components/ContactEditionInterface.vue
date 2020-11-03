<template>
  <div class="contact-edition-interface">
    <div
      v-if="isContactEditable"
      class="contact-edition-interface__save"
      @click="$emit('save')"
    >
      Save
    </div>
    <div
      v-else-if="!isContactEditable"
      class="contact-edition-interface__edit"
      @click="$emit('edit')"
    >
      Edit
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactEditionInterface",

  props: {
    isContactEditable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>