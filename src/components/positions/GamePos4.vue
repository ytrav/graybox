<script lang="ts">
import { View360, EquirectProjection } from "@egjs/vue3-view360";
import { useStore } from "vuex";

export default {
    data() {
        return {
            unlocked: false,
        }
    },
    setup() {
        const projection = new EquirectProjection({
            src: "../../src/assets/scenes/scene4.png",
        })
        const store = useStore()
        return {
            setDialogue: (obj: object) => store.commit('setDialogue', obj),
            invRemove: () => store.commit('inventoryRemove'),

            projection,
            initialZoom: 5,
            fov: 90,
            disableContextMenu: true,
            wheelScrollable: true,
            useGrabCursor: false,
        }
    },
    components: {
        View360
    },
    props: {
        initialZoom: {
            type: Number,
            default: 1,
        },
        fov: {
            type: Number,
            default: 90,
        },
        disableContextMenu: {
            type: Boolean,
            default: false,
        },
        wheelScrollable: {
            type: Boolean,
            default: false,
        },
        useGrabCursor: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        flavorText(obj: string) {
            switch (obj) {

            }
        },
    }
}
</script>

<template>
    <div class="scene">
        <View360 :hotspot="{ 'zoom': true }" :projection="projection" :initial-zoom="1" :disableContextMenu="true"
            :useGrabCursor="false" :wheelScrollable="true" :fov="100" style="width: 100%; height: 100%;">
            <div class="view360-hotspots">
                <div class="view360-hotspot exit-door" data-yaw="0" data-pitch="40">
                </div>
                <div class="view360-hotspot hallway2 link" data-position="0 40 40">
                    <router-link to="/pos1"></router-link>
                </div>

            </div>
        </View360>
    </div>
</template>