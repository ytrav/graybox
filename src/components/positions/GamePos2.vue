<script lang="ts">
export default {
    created() {
        console.log('pos2')
    },
}
</script>

<template>
    <div class="scene">
        <img src="../../assets/scenes/scene2.png" alt="scene 2">
        <router-link to="/pos3">go</router-link>
    </div>
</template>