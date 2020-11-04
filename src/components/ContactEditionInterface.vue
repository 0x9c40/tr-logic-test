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

    <div @click="undoLastChange">Undo Last Change</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ContactEditionInterface",

  props: {
    isContactEditable: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    ...mapActions(["undoLastChange"]),
  },
};
</script>

<style>
</style>