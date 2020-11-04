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
        ["Phone", "+79997772323"],
      ],
      [
        ["ID", 2],
        ["Name", "Lubomir"],
        ["Phone", "+79995559494"],
      ],
      [
        ["ID", 3],
        ["Name", "Christy"],
        ["Phone", "+79997772323"],
      ],
      [
        ["ID", 4],
        ["Name", "Lubomir"],
        ["Phone", "+79995559494"],
      ],
      [
        ["ID", 5],
        ["Name", "Christy"],
        ["Phone", "+79997772323"],
      ],
      [
        ["ID", 6],
        ["Name", "Lubomir"],
        ["Phone", "+79995559494"],
      ],
      [
        ["ID", 7],
        ["Name", "Christy"],
        ["Phone", "+79997772323"],
      ],
      [
        ["ID", 8],
        ["Name", "Lubomir"],
        ["Phone", "+79995559494"],
      ],
    ],
    newContactID: 9,
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
