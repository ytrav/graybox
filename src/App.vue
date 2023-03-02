<script lang="ts">
// import DialogueBox from './components/DialogueBox.vue';

export default {
  name: 'graybox',
  components: {
  }
}
</script>

<template>
  <div id="cache">
    <img src="assets/scenes/scene1.png" alt="scene 1">
    <img src="assets/scenes/scene2.png" alt="scene 1">
    <img src="assets/scenes/scene3.png" alt="scene 1">
  </div>
  <router-view v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="Component" :key="route.path" />
      </keep-alive>
      
    </Transition>
  </router-view>
</template>

<style>

#cache {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
