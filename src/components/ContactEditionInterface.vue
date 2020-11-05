<template>
  <div class="contact-edition-interface">
    <template v-if="isContactEditable">
      <div class="contact-edition-interface__save" @click="$emit('save')">
        Save
      </div>
      <div @click="undoLastChange">Undo Last Change</div>
    </template>

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

<style lang="scss">
.contact-edition-interface {
  display: flex;
}
</style>