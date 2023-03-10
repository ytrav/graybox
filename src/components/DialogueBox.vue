<template>
    <div id="dialogue" @click="handleClick">
      <article>
        <h2>{{ dialogueHeading }}</h2>
        <p>{{ displayedDialogueText }}</p>
      </article>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed, onMounted, watch } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    setup() {
      const store = useStore();
      const displayedDialogueText = ref('');
      const letterDelay = 50; // milliseconds
      let cancelRendering = false;
      let renderFinished = false;
  
      const dialogueHeading = computed(() => {
        return store.state.dialogueHeading;
      });
  
      const dialogueText = computed(() => {
        return store.state.dialogueText;
      });
  
      const renderDialogueText = async () => {
        for (let i = 0; i < dialogueText.value.length; i++) {
          if (cancelRendering) {
            displayedDialogueText.value = dialogueText.value;
            break;
          }
          displayedDialogueText.value += dialogueText.value.charAt(i);
          await new Promise(resolve => setTimeout(resolve, letterDelay));
        }
        renderFinished = true;
      };
  
      const stopRendering = () => {
        cancelRendering = true;
        renderFinished = false;
      };
  
      const handleClick = () => {
        if (renderFinished) {
          store.commit('closeDialogue');
        } else {
          stopRendering();
          displayedDialogueText.value = dialogueText.value;
          renderFinished = false;
        }
      };
  
      const reset = () => {
        displayedDialogueText.value = '';
        cancelRendering = false;
        renderFinished = false;
      };
  
      watch(
        () => store.state.dialogueText,
        () => {
          reset();
          renderDialogueText();
        },
      );
  
      onMounted(() => {
        renderDialogueText();
      });
  
      return {
        dialogueHeading,
        displayedDialogueText,
        handleClick,
        renderFinished,
      };
    },
  });
  </script>
  