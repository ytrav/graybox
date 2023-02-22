<script lang="ts">
export default {
    created() {
        console.log('pos3')
    },
}
</script>

<template>
    <!-- <div>
        <span>pos 1</span>
    </div> -->
    <div class="scene">
        <img src="../../assets/scenes/scene3.png" alt="scene 3">
        <router-link to="/pos4">go</router-link>
    </div>
</template>