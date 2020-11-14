<template>
  <div class="add-contact-field">
    <div class="add-contact-field__show-modal" @click="showModal">
      Add Field
    </div>
    <Modal :opened="isModalOpened" @close="closeModal">
      <form class="add-contact-field-form">
        <div class="add-contact-field-inputs">
          <input
            v-model="fieldName"
            type="text"
            class="add-contact-field-inputs__input"
            placeholder="Name"
          />
          <input
            v-model="fieldValue"
            type="text"
            class="add-contact-field-inputs__input"
            placeholder="Value"
          />
        </div>
        <div class="add-contact-field-buttons">
          <div class="add-contact-field-buttons__save" @click="save()">
            Save
          </div>
          <div class="add-contact-field-buttons__cancel" @click="closeModal">
            Cancel
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Modal from "./Modal.vue";

export default {
  name: "AddContactField",

  components: {
    Modal,
  },

  data() {
    return {
      isModalOpened: false,
      fieldName: "",
      fieldValue: "",
    };
  },

  methods: {
    ...mapActions(["addContactField"]),

    showModal() {
      this.isModalOpened = true;
    },

    closeModal() {
      this.isModalOpened = false;
    },

    save() {
      const field = [this.fieldName, this.fieldValue];
      this.fieldName = "";
      this.fieldValue = "";
      this.addContactField(field);
      this.closeModal();
    },
  },
};
</script>

<style lang="scss">
.add-contact-field {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__show-modal {
    margin-top: 16px;
    padding: 8px 24px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.36);
    cursor: pointer;
    transition: background-color 0.1s;

    &:hover {
      background-color: #f5f5f5;
    }
  }
}

.add-contact-field-inputs {
  display: flex;
  justify-content: space-between;

  &__input {
    width: 48%;
    max-width: 200px;
    height: 32px;
    padding: 0 8px;
  }
}

.add-contact-field-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;

  &__save,
  &__cancel {
    cursor: pointer;
  }
}
</style>