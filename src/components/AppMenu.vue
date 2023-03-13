<script lang="ts">
export default {
    name: 'AppMenu',
}
</script>

<template>
    <div class="menu">
        <div class="title">
            <h1>Graybox</h1>
            <h2>point and click experience</h2>
        </div>
        <div class="buttons">
            <router-link to="/pos1">Play</router-link>
            <router-link to="/">Settings</router-link>
            <router-link to="/">About</router-link>
        </div>
    </div>
</template>