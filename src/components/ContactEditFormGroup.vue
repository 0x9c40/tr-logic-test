<template>
  <div class="contact-edit-form-group">
    <label class="contact-edit-form-group__label" :for="name">
      {{ label }}
    </label>

    <div class="contact-edit-form-group-input">
      <input
        :id="name"
        :name="name"
        :type="type"
        :value="value"
        class="contact-edit-form-group__input"
        @blur="saveChanges"
      />

      <div
        class="cancel"
        :class="{ 'cancel--active': oldValues.length > 0 }"
        @click="confirmUndoOpened = true"
      >
        <img
          class="cancel__image"
          src="@/assets/icons/undo-arrow.svg"
          alt="undo-arrow.svg"
        />
      </div>
      <div
        class="delete"
        :class="{ 'cancel--active': ![0, 1].includes(index) }"
        @click="openDeletionConfirm"
      >
        <img
          class="delete__image"
          src="@/assets/icons/trash.svg"
          alt="undo-arrow.svg"
        />
      </div>
    </div>

    <Modal
      :opened="confirmDeletionOpened"
      @close="confirmDeletionOpened = false"
    >
      <div class="confirm-question">Are you sure?</div>
      <div class="confirm-buttons">
        <div
          class="confirm-buttons__button"
          @click="confirmDeletionOpened = false"
        >
          Cancel
        </div>
        <div
          class="confirm-buttons__button confirm-buttons__button--delete"
          @click="confirmFieldDeletion"
        >
          Yes, delete.
        </div>
      </div>
    </Modal>

    <Modal :opened="confirmUndoOpened" @close="confirmUndoOpened = false">
      <div class="confirm-question">Are you sure?</div>
      <div class="confirm-buttons">
        <div class="confirm-buttons__button" @click="confirmUndoOpened = false">
          Cancel
        </div>
        <div
          class="confirm-buttons__button confirm-buttons__button--delete"
          @click="confirmUndo"
        >
          Yes, undo changes.
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
      confirmUndoOpened: false,
      cancelChangesButton: false,
      oldValues: [],
    };
  },

  methods: {
    ...mapActions(["deleteField", "editField"]),

    saveChanges(event) {
      const newValue = event.target.value;
      if (this.value !== newValue) {
        this.oldValues.push(this.value);
        this.editField({ index: this.index, newValue });
      }
    },

    cancelChanges() {
      if (this.oldValues.length > 0) {
        const newValue = this.oldValues.pop();
        this.editField({ index: this.index, newValue });
      }
    },

    openDeletionConfirm() {
      this.confirmDeletionOpened = true;
    },

    confirmFieldDeletion() {
      this.deleteField(this.index);
      this.confirmDeletionOpened = false;
    },

    confirmUndo() {
      this.confirmUndoOpened = false;
      this.cancelChanges();
    },
  },
};
</script>

<style lang="scss">
.contact-edit-form-group {
  display: flex;
  margin-bottom: 16px;
  height: 32px;
  justify-content: space-between;
  align-items: center;
  // color: $text-color-grey;

  &__label {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  &__input {
    height: 100%;
    width: calc(200px - 16px - 16px - 8px - 8px);
    border: none;
    border-bottom: 1px solid #777777;
    font-size: 16px;
    padding: 0px 8px;
    // color: $text-color-grey;

    &:focus {
      outline: 1px solid green;
    }
  }
}

.contact-edit-form-group-input {
  height: 32px;
  display: flex;
  align-items: center;
}

.delete,
.cancel {
  height: 16px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  cursor: pointer;

  &--active {
    opacity: 1;
    pointer-events: all;
  }

  &__image {
    width: 16px;
    margin-left: 8px;
    filter: invert(0.5);
  }
}
</style>