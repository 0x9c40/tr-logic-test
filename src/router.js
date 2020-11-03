import Vue from "vue";
import VueRouter from "vue-router";

import ContactsList from "./views/ContactsList.vue";
import Contact from "./views/Contact.vue";

Vue.use(VueRouter);

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
];

const router = new VueRouter({
  routes,
});

export default router;
