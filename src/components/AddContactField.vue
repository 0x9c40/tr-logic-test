<template>
  <div class="add-contact-field">
    <div class="add-contact-field__show-modal" @click="showModal">+</div>
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
    cursor: pointer;
    font-size: 32px;
    font-weight: bold;
    border: 3px solid #094f64;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    margin-top: 16px;
  }
}
.add-contact-field-inputs {
  display: flex;
  justify-content: space-between;

  &__input {
    height: 32px;
    padding: 0 8px;
    width: 48%;
    max-width: 200px;
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