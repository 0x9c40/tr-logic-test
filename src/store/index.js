import Vue from "vue";
import Vuex from "vuex";

import { EditableContact } from "./modules/EditableContact";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [
      [
        ["ID", 0],
        ["Name", "Lubomir"],
        ["Phone", "+79995559494"],
      ],
    ],
    newContactID: 1,
  },

  getters: {},

  mutations: {
    pushContact(state, contact) {
      state.contacts.push(contact);
    },

    incNewContactID(state) {
      state.newContactID++;
    },
  },

  actions: {
    saveContact({ commit, state: { newContactID } }, { name, phone }) {
      commit("pushContact", [
        ["ID", newContactID],
        ["Name", name],
        ["Phone", phone],
      ]);
      commit("incNewContactID");
    },
  },

  modules: {
    EditableContact,
  },
});
