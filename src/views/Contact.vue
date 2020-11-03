<template>
  <div>
    d
    <!-- <router-link to="/contacts-list">Вернуться к контактам</router-link> -->
    {{ contactID }}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Contact",

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.loadEditableContact(vm.contactID);
    });
  },

  props: {
    contactID: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions(["loadEditableContact"]),
  },
};
</script>

<style lang="scss">
</style>
