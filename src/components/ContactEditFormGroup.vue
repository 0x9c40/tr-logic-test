<template>
  <div class="contact-edit-form-group">
    <label class="contact-edit-form-group__label" :for="name">
      {{ label }}
    </label>

    <input
      :id="name"
      :name="name"
      :type="type"
      :value="value"
      class="contact-edit-form-group__input"
      @blur="saveChanges"
    />

    <div class="cancel" @click="cancelChanges">can</div>
    <span>|</span>

    <div class="delete" @click="openDeletionConfirm">del</div>

    <Modal :opened="confirmDeletionOpened">
      <div class="confirm-deletion" @click="confirmFieldDeletion">
        Confirm Field Deletion
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { undoRedoHistory } from "../store";
import Modal from "./Modal.vue";

export default {
  name: "ContactEditFormGroup",

  components: {
    Modal,
  },

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
    index: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      confirmDeletionOpened: false,
      cancelChangesButton: false,
      copiedValue: undefined,
    };
  },

  methods: {
    ...mapActions(["deleteField", "editField"]),

    saveChanges(event) {
      const newValue = event.target.value;
      if (this.value !== newValue) {
        this.editField({ index: this.index, newValue });
      }
    },

    cancelChanges() {
      console.log(undoRedoHistory);
      undoRedoHistory.undo();
    },

    openDeletionConfirm() {
      this.confirmDeletionOpened = true;
    },

    confirmFieldDeletion() {
      this.deleteField(this.index);
      this.confirmDeletionOpened = false;
    },
  },
};
</script>

<style lang="scss">
.contact-edit-form-group {
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