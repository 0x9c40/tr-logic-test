<template>
  <div class="contacts-list">
    <div class="contacts-list-groups-wrapper">
      <div class="contacts-list-groups">
        <ContactsGroup
          v-for="(group, key) in contactGroupsByName"
          :key="key"
          :group-label="key"
          :contacts="group"
        />
      </div>
    </div>
    <AddContact class="contacts-list__add" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddContact from "../components/AddContact.vue";
import ContactsGroup from "../components/ContactsGroup.vue";
import groupBy from "lodash/groupBy";

export default {
  name: "ContactsList",

  components: {
    AddContact,
    ContactsGroup,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(["contacts"]),

    contactGroupsByName() {
      const contacts = this.sortedContacts;

      const groups = groupBy(contacts, byFirstLetterOfName);

      return groups;
    },

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

function getName(contact) {
  return contact[1][1].toLowerCase();
}

function byContactName(a, b) {
  if (getName(a) < getName(b)) return -1;
  if (getName(a) > getName(b)) return 1;
  return 0;
}

function byFirstLetterOfName(contact) {
  return getName(contact)[0] ? getName(contact)[0].toLowerCase() : "";
}
</script>

<style lang="scss">
.contacts-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__add {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
}

.contacts-list-groups-wrapper {
  width: 100%;
  overflow-x: hidden;
}

.contacts-list-groups {
  width: calc(100% + var(--scrollbar-width));
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 0 var(--contacts-list-groups-padding);
  overflow-y: scroll;
}
</style>
