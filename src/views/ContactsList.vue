<template>
  <div>
    <ContactCard
      v-for="(contact, index) in contacts"
      :key="index"
      :name="contact[1][1]"
      :phone="contact[2][1]"
    />
    <AddContact />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddContact from "../components/AddContact.vue";
import ContactCard from "../components/ContactCard.vue";

export default {
  name: "ContactsList",

  components: {
    AddContact,
    ContactCard,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(["contacts"]),
  },
};
</script>

<style lang="scss">
</style>
