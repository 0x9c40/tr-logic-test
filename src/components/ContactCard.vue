<template>
  <div class="contact-card" @click="toggleInterface">
    <div class="contact-card__info">
      <div class="contact-card__name">{{ name }}</div>
      <div class="contact-card__phone">{{ phone }}</div>
    </div>
    <div v-if="isInterfaceOpened" class="contact-card__interface" @click.stop>
      <div class="contact-card__delete" @click="deleteContact(contact[0][1])">
        Delete
      </div>
      <router-link :to="thisContactURL">Edit</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ContactCard",

  props: {
    contact: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      isInterfaceOpened: false,
    };
  },

  computed: {
    thisContactURL() {
      return `/contact/${this.contact[0][1]}`;
    },

    name() {
      return this.contact[1][1];
    },

    phone() {
      return this.contact[2][1];
    },
  },

  methods: {
    ...mapActions(["deleteContact"]),

    toggleInterface() {
      this.isInterfaceOpened = !this.isInterfaceOpened;
    },
  },
};
</script>

<style lang="scss">
.contact-card {
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.36);
  margin-bottom: 16px;
  padding: 16px;
  transition: background-color 0.1s;

  &:hover {
    background-color: #f5f5f5;
  }

  &__info {
    display: flex;
  }

  &__name,
  &__phone {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 50%;
  }
}
</style>