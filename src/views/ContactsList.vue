<template>
  <div class="contacts-list">
    <div class="contacts-list-cards">
      <ContactCard
        v-for="contact in sortedContacts"
        :key="getContactID(contact)"
        :contact="contact"
      />
    </div>
    <AddContact class="contacts-list__add" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddContact from "../components/AddContact.vue";
import ContactCard from "../components/ContactCard.vue";

function getName(contact) {
  return contact[1][1].toLowerCase();
}

function byContactName(a, b) {
  if (getName(a) < getName(b)) return -1;
  if (getName(a) > getName(b)) return 1;
  return 0;
}

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

    sortedContacts() {
      const contacts = this.contacts;

      return contacts.sort(byContactName);
    },
  },

  methods: {
    getContactID(contact) {
      return contact[0][1];
    },
  },
};
</script>

<style lang="scss">
.contacts-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  &__add {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
}

.contacts-list-cards {
  width: 100%;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 8px;
}
</style>
