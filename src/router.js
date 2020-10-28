import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/contacts-list",
  },
  {
    path: "/contacts-list",
    name: "ContactsList",
    component: () =>
      import(
        /* webpackChunkName: "contacts-list" */ "./views/ContactsList.vue"
      ),
  },
  {
    path: "/edit-contact",
    name: "edit-contact",
    component: () =>
      import(/* webpackChunkName: "edit-contact" */ "./views/EditContact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

let a = (env) => console.log(env);

export default router;
