<template>
  <div class="add-contact" @click="showModal">
    <div class="add-contact__label">Add Contact</div>

    <Modal :opened="isModalOpened" @close="closeModal">
      <form class="add-contact-form" @click.stop>
        <FormGroup v-model="name" label="Name" name="contact-name" />
        <FormGroup v-model="phone" label="Number" name="phone-number" />
        <div class="add-contact-buttons">
          <div class="add-contact__save" @click="save({ name, phone })">
            Save
          </div>
          <div class="add-contact__cancel" @click="closeModal">Cancel</div>
        </div>
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

    save({ name, phone }) {
      this.saveContact({ name, phone });
      this.closeModal();
    },
  },
};
</script>

<style lang="scss">
.add-contact {
  &__label {
    padding: 8px 24px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.36);
    transition: background-color 0.1s;

    &:hover {
      background-color: #f5f5f5;
    }
  }
}

.add-contact-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
}
</style>