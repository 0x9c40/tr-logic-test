import Vue from "vue";
import VueRouter from "vue-router";

import ContactsList from "./views/ContactsList.vue";
import Contact from "./views/Contact.vue";

Vue.use(VueRouter);

import { mapActions } from "vuex";
const { loadEditableContact } = mapActions(["loadEditableContact"]);

const routes = [
  {
    path: "/",
    redirect: "/contacts-list",
  },
  {
    path: "/contacts-list",
    component: ContactsList,
  },
  {
    path: "/contact/:contactID",
    component: Contact,
    props: function stringToInt(route) {
      const contactID = Number.parseInt(route.params.contactID, 10);
      return {
        contactID,
      };
    },
  },

  // path: '/user/:userId',
  // component: UserProfile,
  // props: (route) => {
  //   const userId = Number.parseInt(route.params.userId, 10)
  //   if (Number.isNaN(userId)) {
  //     return 0
  //   }
  //   return { userId }
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
