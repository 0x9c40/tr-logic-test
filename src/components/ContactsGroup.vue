<template>
  <div class="group">
    <div class="group__label">{{ groupLabel }}</div>
    <ContactCard
      v-for="contact in contacts"
      :key="getContactID(contact)"
      :contact="contact"
    />
  </div>
</template>

<script>
import ContactCard from "./ContactCard.vue";
export default {
  name: "ContactsGroup",

  components: {
    ContactCard,
  },

  props: {
    groupLabel: {
      type: String,
      required: true,
      validation(val) {
        return val.length === 0 || val.length === 1;
      },
    },

    contacts: {
      type: Array,
      required: true,
    },
  },

  methods: {
    getContactID(contact) {
      return contact[0][1];
    },
  },
};
</script>

<style lang="scss" scoped>
.group {
  &__label {
    position: relative;
    left: calc(-1 * var(--contacts-list-groups-padding) + 4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    border: 1px solid rgba(var(--color-main), 0.4);
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}
</style>