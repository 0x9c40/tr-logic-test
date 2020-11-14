<template>
  <div class="contact">
    <ContactEditionInterface
      :is-contact-editable="isEditable"
      @edit="activateEdition"
      @save="save"
    >
      <router-link class="back-to-contacts" to="/contacts-list">
        Back To Contacts
      </router-link>
    </ContactEditionInterface>

    <ContactFields v-show="!isEditable" :fields="contactFields" />

    <ContactEditForm v-show="isEditable" :fields="contactFields" />

    <!-- <ContactFields :fields="contactFields" />

    <ContactEditForm :fields="contactFields" /> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ContactFields from "../components/ContactFields.vue";
import ContactEditForm from "../components/ContactEditForm.vue";
import ContactEditionInterface from "../components/ContactEditionInterface.vue";

export default {
  name: "Contact",

  components: {
    ContactFields,
    ContactEditForm,
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
    ...mapActions(["loadEditableContact", "saveChanges"]),

    activateEdition() {
      this.isEditable = true;
    },

    save() {
      this.saveChanges(this.contactID);
      this.isEditable = false;
    },
  },
};
</script>

<style lang="scss">
.back-to-contacts {
  font-size: 20px;
  text-decoration: none;
}
</style>
