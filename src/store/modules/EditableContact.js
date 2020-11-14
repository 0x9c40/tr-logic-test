import Vue from "vue";
import { cloneDeep } from "lodash";

export const EditableContact = {
  state: {
    fields: [],
    history: [],
  },

  mutations: {
    setFields(state, editableContact) {
      state.fields = editableContact;
    },

    pushNewField(state, field) {
      state.history.push(cloneDeep(state.fields));
      state.fields.push(field);
    },

    removeField(state, index) {
      state.history.push(cloneDeep(state.fields));
      state.fields.splice(index, 1);
    },

    editField(state, { index, newValue }) {
      state.history.push(cloneDeep(state.fields));
      Vue.set(state.fields[index], 1, newValue);
    },

    undoLastChange(state) {
      if (state.history.length > 0) state.fields = state.history.pop();
    },

    clearHistory(state) {
      state.history = [];
    },
  },

  getters: {
    contactModified(state) {
      return state.history.length > 0;
    },
  },

  actions: {
    loadEditableContact({ commit, rootState }, contactID) {
      const contacts = rootState.contacts;
      const editableContact = contacts.find(function findByID(contact) {
        return contact[0][1] === contactID;
      });
      commit("setFields", editableContact.slice(1));
    },

    addContactField({ commit }, field) {
      commit("pushNewField", field);
    },

    deleteField({ commit }, index) {
      commit("removeField", index);
    },

    editField({ commit }, { index, newValue }) {
      commit("editField", { index, newValue });
    },

    undoLastChange({ commit }) {
      commit("undoLastChange");
    },

    saveChanges({ commit }, contactID) {
      commit("replaceContact", contactID, {
        root: true,
      });
      commit("clearHistory");
    },
  },
};
