<template>
  <div class="contact-edition-interface">
    <template v-if="isContactEditable">
      <div
        key="1"
        class="contact-edition-interface__undo"
        :class="{ 'contact-edition-interface__undo--active': contactModified }"
        @click="undoLastChange"
      >
        Undo Last Change
      </div>
      <div class="contact-edition-interface__save" @click="$emit('save')">
        Save
      </div>
    </template>
    <template v-else-if="!isContactEditable">
      <slot></slot>
      <div class="contact-edition-interface__edit" @click="$emit('edit')">
        Edit
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ContactEditionInterface",

  props: {
    isContactEditable: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters(["contactModified"]),
  },

  methods: {
    ...mapActions(["undoLastChange"]),
  },
};
</script>

<style lang="scss">
.contact-edition-interface {
  display: flex;
  padding: 16px;
  height: 32px;
  align-items: center;
  justify-content: space-between;

  &__edit {
    margin-left: auto;
  }

  &__edit,
  &__undo,
  &__save {
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
  }

  &__undo {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;

    &--active {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>