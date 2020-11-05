<template>
  <form class="contact-edit-form">
    <ContactEditFormGroup
      v-for="(field, index) in fields"
      :key="index"
      :label="field[0]"
      :name="String(index)"
      :value="field[1]"
      :index="index"
    />

    <AddContactField />
  </form>
</template>

<script>
import AddContactField from "../components/AddContactField.vue";
import ContactEditFormGroup from "./ContactEditFormGroup.vue";

export default {
  name: "ContactEditForm",

  components: {
    ContactEditFormGroup,
    AddContactField,
  },

  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.contact-edit-form {
  padding: 16px;
}
</style>