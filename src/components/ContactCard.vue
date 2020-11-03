<template>
  <div class="contact-card">
    <div class="contact-card__name">{{ contact[1][1] }}</div>
    <div class="contact-carf__phone">{{ contact[2][1] }}</div>
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
  },
};
</script>

<style>
</style>