import { cloneDeep } from "lodash";

class UndoRedoHistory {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
  }

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

export const undoPlugin = (store) => {
  // initialize and save the starting stage
  undoRedoHistory.init(store);
  let firstState = cloneDeep(store.state);
  undoRedoHistory.addState(firstState);

  store.subscribe((mutation, state) => {
    // is called AFTER every mutation
    undoRedoHistory.addState(cloneDeep(state));
  });
};
