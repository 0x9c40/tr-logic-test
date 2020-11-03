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
  </form>
</template>

<script>
import ContactEditFormGroup from "./ContactEditFormGroup.vue";

export default {
  name: "ContactEditForm",

  components: {
    ContactEditFormGroup,
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
  border: 1px solid orange;
}
</style>