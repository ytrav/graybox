<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        var inventory = computed(() => {
            return store.state.inventory;
        })
        return {
            inventory,
        }
    }
}

</script>

<template>
    <div id="inventory">
        <div class="inv-item" v-for="item in inventory" :key="item">
            <mdicon :name="item" />
        </div>
    </div>
</template>