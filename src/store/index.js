import Vue from "vue";
import Vuex from "vuex";

import { EditableContact } from "./modules/EditableContact";

Vue.use(Vuex);

export const store = new Vuex.Store({
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
        ["Phone", "+79117772323"],
      ],
      [
        ["ID", 2],
        ["Name", "Leonid"],
        ["Phone", "+79112435465"],
      ],
      [
        ["ID", 3],
        ["Name", "Lera"],
        ["Phone", "+79112333456"],
      ],
    ],
    newContactID: 4,
  },

  getters: {},

  mutations: {
    pushContact(state, contact) {
      state.contacts.push(contact);
    },

    deleteContact(state, ID) {
      state.contacts = state.contacts.filter(function byID(contact) {
        return contact[0][1] !== ID;
      });
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

    deleteContact({ commit }, ID) {
      commit("deleteContact", ID);
    },
  },

  modules: {
    EditableContact,
  },
});
