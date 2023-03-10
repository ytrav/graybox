<script lang="ts">
import DialogueBox from './components/DialogueBox.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'graybox',
  components: {
    DialogueBox
  },
  setup() {
    const store = useStore();
    var showDialogue = computed(() => {
      return store.state.showDialogue;
    })
    return {
      showDialogue,
      closeDialogue: () => store.commit('closeDialogue'),
    }
  }
}
</script>

<template>
  <Transition name="dialogue"><DialogueBox v-if="showDialogue" @close="closeDialogue" /></Transition>
  <router-view v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </router-view>
</template>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.dialogue-enter-active,
.dialogue-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.dialogue-enter-from,
.dialogue-leave-to {
  transform: translateY(25px);
  opacity: 0;
}


</style>
