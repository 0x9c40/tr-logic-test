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
    <!-- 
    <div class="cancel" @click="cancelChanges">can</div>
    <span>|</span>

    <div class="delete" @click="openDeletionConfirm">del</div> -->

    <Modal :opened="confirmDeletionOpened">
      <div class="confirm-deletion" @click="confirmFieldDeletion">
        Confirm Field Deletion
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
    width: 200px;
    height: 32px;
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
</style>