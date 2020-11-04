import Vue from "vue";

export const EditableContact = {
  state: {
    fields: [],
  },

  mutations: {
    setFields(state, editableContact) {
      state.fields = editableContact;
    },

    pushNewField(state, field) {
      state.fields.push(field);
    },

    removeField(state, index) {
      state.fields.splice(index, 1);
    },

    editField(state, { index, newValue }) {
      Vue.set(state.fields[index], 1, newValue);
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
  },
};
