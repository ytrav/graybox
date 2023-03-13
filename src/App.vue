<script lang="ts">
import DialogueBox from './components/DialogueBox.vue';
import AppInventory from './components/AppInventory.vue';
import { computed, defineComponent, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'graybox',
  components: {
    DialogueBox,
    AppInventory,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    var showDialogue = computed(() => {
      return store.state.showDialogue;
    })
    const openFullscreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    }
    const closeFullscreen = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    watch(
      () => route.path,
      (path: string) => {
        if (path === '/pos1' || path === '/pos2' || path === '/pos3' || path === '/pos4') {
          openFullscreen();
        } else if (path === "/") {
          closeFullscreen();
        }
      }
    )
    onMounted(() => {
      watch(
        () => route.path,
        (path: string) => {
          if (path === '/pos1' || path === '/pos2' || path === '/pos3' || path === '/pos4') {
            openFullscreen();
          } else if (path === '/') {
            closeFullscreen();
          }
        }
      );
    });
    return {
      openFullscreen,
      closeFullscreen,
      showDialogue,
      closeDialogue: () => store.commit('closeDialogue'),
    }
  }
})
</script>

<template>
  <Transition name="dialogue">
    <DialogueBox v-if="showDialogue" @close="closeDialogue" />
  </Transition>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
  <AppInventory />
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
