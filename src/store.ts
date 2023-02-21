// import statement
import { createStore, Store } from 'vuex';

// interface for the state
interface State {
  dialogueHeading: string;
  dialogueText: string;
  inventory: string[];
}

// store declaration
const store: Store<State> = createStore<State>({
  state(): State {
    return {
      dialogueHeading: '',
      dialogueText: '',
      inventory: [],
    };
  },
  mutations: {
    setDialogue(state: State, dialogue: { heading: string; text: string }): void {
      state.dialogueHeading = dialogue.heading;
      state.dialogueText = dialogue.text;
    },
    inventoryAdd(state: State, item: string): void {
      state.inventory.push(item);
    },
    inventoryRemove(state: State, item: string): void {
      const index = state.inventory.indexOf(item);
      if (index !== -1) {
        state.inventory.splice(index, 1);
      }
    },
  },
});

// export statement
export default store;