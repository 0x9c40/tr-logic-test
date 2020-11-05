<template>
  <div class="contact-fields">
    <ContactField
      v-for="(field, index) in fields"
      :key="index"
      :field="field"
    />
  </div>
</template>

<script>
import ContactField from "../components/ContactField.vue";

export default {
  name: "ContactFields",

  components: {
    ContactField,
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
.contact-fields {
  padding: 16px;
}
</style>