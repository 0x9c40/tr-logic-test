import Vue from "vue";
import Vuex from "vuex";

import { EditableContact } from "./modules/EditableContact";
import { undoPlugin } from "./plugins/UndoPlugin";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [undoPlugin],

  state: {
    contacts: [
      [
        ["ID", 0],
        ["Name", "Lubomir"],
        ["Phone", "+79995559494"],
      ],
      [
        ["ID", 1],
        ["Name", "Christy"],
        ["Phone", "+79997772323"],
      ],
    ],
    newContactID: 2,
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
