// import statement
import { createStore, Store } from 'vuex';

// interface for the state
interface State {
  showDialogue: boolean;
  dialogueHeading: string;
  dialogueText: string;
  inventory: string[];
}

// store declaration
const store: Store<State> = createStore<State>({
  state(): State {
    return {
      showDialogue: false,
      dialogueHeading: '*',
      dialogueText: `It's a box, with boxes stacked on top of it.                     This is the first time you see a box sculpture like this.`,
      inventory: [],
    };
  },
  mutations: {
    setDialogue(state: State, dialogue: { heading: string; text: string }): void {
      state.showDialogue = true;
      state.dialogueHeading = dialogue.heading;
      state.dialogueText = dialogue.text;
    },
    closeDialogue(state: State) {
      state.showDialogue = false;
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
