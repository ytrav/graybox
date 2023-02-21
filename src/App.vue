<script lang="ts">
import DialogueBox from './components/DialogueBox.vue';

export default {
  name: 'graybox',
  components: {
    DialogueBox,
  }
}
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <DialogueBox />
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
