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
    path: "/contact",
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
