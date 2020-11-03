export const EditableContact = {
  state: {
    fields: [],
  },

  mutations: {
    setFields(state, editableContact) {
      state.fields = editableContact;
    },

    pushNewField(state, field) {
      console.log("pushNewField", field);
      state.fields.push(field);
    },
  },

  actions: {
    loadEditableContact({ commit, rootState }, contactID) {
      const contacts = rootState.contacts;
      const editableContact = contacts.find(function findByID(contact) {
        return contact[0][1] === contactID;
      });
      commit("setFields", editableContact);
    },

    addContactField({ commit }, field) {
      commit("pushNewField", field);
    },
  },
};
