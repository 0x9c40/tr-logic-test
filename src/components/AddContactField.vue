<template>
  <div class="add-contact-field">
    <div class="add-contact-field__show-modal" @click="showModal">+</div>
    <Modal :opened="isModalOpened" @close="closeModal">
      <form class="add-contact-field-form">
        <input
          v-model="fieldName"
          type="text"
          class="add-contact-field__input"
          placeholder="Name"
        />
        <input
          v-model="fieldValue"
          type="text"
          class="add-contact-field__input"
          placeholder="Value"
        />
        <div class="add-contact-field__save" @click="save()">Save</div>
        <div class="add-contact-field__cancel" @click="closeModal">Cancel</div>
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

<style>
</style>