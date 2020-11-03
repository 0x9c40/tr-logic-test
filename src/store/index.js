import Vue from "vue";
import Vuex from "vuex";

import { EditableContact } from "./modules/EditableContact";
import { cloneDeep } from "lodash";

Vue.use(Vuex);

class UndoRedoHistory {
  store;
  history = [];
  currentIndex = -1;

  init(store) {
    this.store = store;
  }

  addState(state) {
    // may be we have to remove redo steps
    if (this.currentIndex + 1 < this.history.length) {
      this.history.splice(this.currentIndex + 1);
    }
    this.history.push(state);
    this.currentIndex++;
  }

  undo() {
    const prevState = this.history[this.currentIndex - 1];
    // take a copy of the history state
    // because it would be changed during store mutations
    // what would corrupt the undo-redo-history
    // (same on redo)
    this.store.replaceState(cloneDeep(prevState));
    this.currentIndex--;
  }

  redo() {
    const nextState = this.history[this.currentIndex + 1];
    this.store.replaceState(cloneDeep(nextState));
    this.currentIndex++;
  }
}

export const undoRedoHistory = new UndoRedoHistory();

const undoRedoPlugin = (store) => {
  // initialize and save the starting stage
  undoRedoHistory.init(store);
  let firstState = cloneDeep(store.state);
  undoRedoHistory.addState(firstState);

  store.subscribe((mutation, state) => {
    // is called AFTER every mutation
    undoRedoHistory.addState(cloneDeep(state));
  });
};

export const store = new Vuex.Store({
  plugins: [undoRedoPlugin],

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
