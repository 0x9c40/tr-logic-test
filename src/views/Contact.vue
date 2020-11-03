<template>
  <div class="contact">
    <ContactFields :fields="contactFields" />

    <ContactEditForm :fields="contactFields" />

    <AddContactField />

    <ContactEditionInterface
      :is-contact-editable="isEditable"
      @edit="activateEdition"
      @save="saveChanges"
    />

    <router-link to="/contacts-list">Вернуться к контактам</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ContactFields from "../components/ContactFields.vue";
import ContactEditForm from "../components/ContactEditForm.vue";
import AddContactField from "../components/AddContactField.vue";
import ContactEditionInterface from "../components/ContactEditionInterface.vue";

export default {
  name: "Contact",

  components: {
    ContactFields,
    ContactEditForm,
    AddContactField,
    ContactEditionInterface,
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.loadEditableContact(vm.contactID);
    });
  },

  props: {
    contactID: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      isEditable: false,
    };
  },

  computed: {
    ...mapState({
      contactFields: (state) => state.EditableContact.fields,
    }),
  },

  methods: {
    ...mapActions(["loadEditableContact"]),

    activateEdition() {
      this.isEditable = true;
    },

    saveChanges() {
      this.isEditable = false;
    },
  },
};
</script>

<style lang="scss">
</style>
