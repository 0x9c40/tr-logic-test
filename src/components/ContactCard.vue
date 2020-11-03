<template>
  <div class="contact-card">
    <div class="contact-card__name">{{ name }}</div>
    <div class="contact-carf__phone">{{ phone }}</div>
    <router-link :to="thisContactURL">Редактировать</router-link>
  </div>
</template>

<script>
export default {
  name: "ContactCard",

  props: {
    contact: {
      type: Array,
      required: true,
    },
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
};
</script>

<style>
</style>