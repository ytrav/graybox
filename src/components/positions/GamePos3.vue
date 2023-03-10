<script lang="ts">
import { View360, EquirectProjection } from "@egjs/vue3-view360";

export default {
    setup() {
        const projection = new EquirectProjection({
            src: "../../src/assets/scenes/scene3.png",
        })
        return {
            projection,
            initialZoom: 5,
            fov: 90,
            disableContextMenu: true,
            wheelScrollable: true,
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
    }
}
</script>

<template>
    <div class="scene">
        <View360 :hotspot="{ 'zoom': true }" :projection="projection" :initial-zoom="1" :disableContextMenu="true"
            :wheelScrollable="true" :fov="90" style="width: 100%; height: 100%;">
            <div class="view360-hotspots">
                <div class="view360-hotspot door3 link" data-position="0 1 1">
                    <router-link to="/pos2"></router-link>
                </div>
                <div class="view360-hotspot chest" :data-yaw="5" :data-pitch="23.5"></div>
            </div>
        </View360>
    </div>
</template>