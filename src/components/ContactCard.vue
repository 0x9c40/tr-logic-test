<template>
  <div class="contact-card">
    <div class="contact-card__name">{{ name }}</div>
    <div class="contact-carf__phone">{{ phone }}</div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",

  props: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>