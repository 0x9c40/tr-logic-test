<template>
  <div>
    <ContactField
      v-for="(field, index) in contactFields"
      :key="index"
      :field="field"
    />

    <AddContactField />

    <router-link to="/contacts-list">Вернуться к контактам</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ContactField from "../components/ContactField.vue";
import AddContactField from "../components/AddContactField.vue";

export default {
  name: "Contact",

  components: {
    ContactField,
    AddContactField,
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
    return {};
  },

  computed: {
    ...mapState({
      contactFields: (state) => state.EditableContact.fields.slice(1),
    }),
  },

  methods: {
    ...mapActions(["loadEditableContact"]),
  },
};
</script>

<style lang="scss">
</style>
