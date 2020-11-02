<template>
  <div class="add-contact">
    <div class="add-contact__show-modal" @click="showModal">Add Contact</div>
    <Modal :opened="isModalOpened" @close="closeModal">
      <form class="add-contact-form">
        <FormGroup v-model="name" label="Name" name="contact-name" />
        <FormGroup v-model="phone" label="Number" name="phone-number" />
        <div class="add-contact__save" @click="saveContact({ name, phone })">
          Save
        </div>
        <div class="add-contact__cancel" @click="closeModal">Cancel</div>
      </form>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Modal from "./Modal.vue";
import FormGroup from "./FormGroup.vue";

export default {
  name: "AddContact",

  components: {
    Modal,
    FormGroup,
  },

  data() {
    return {
      isModalOpened: false,
      name: "",
      phone: "",
    };
  },

  methods: {
    ...mapActions(["saveContact"]),

    showModal() {
      this.isModalOpened = true;
    },

    closeModal() {
      this.isModalOpened = false;
    },
  },
};
</script>

<style>
</style>