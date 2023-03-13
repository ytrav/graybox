<script lang="ts">
import { View360, CylindricalProjection } from "@egjs/vue3-view360";

export default {
    setup() {
        const projection = new CylindricalProjection({
            src: "../../src/assets/scenes/scene2.png",
            partial: true
        })
        return {
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
    }
}
</script>

<template>
    <div class="scene">
        <View360 :hotspot="{ 'zoom': true }" :projection="projection" :initial-zoom="3.5" :disableContextMenu="true"
            :useGrabCursor="false"
            :wheelScrollable="true" :fov="90" style="width: 100%; height: 100%;">
            <div class="view360-hotspots">
                <div class="view360-hotspot door2 link" :data-yaw="-5" :data-pitch="18.5">
                    <router-link to="/pos1"></router-link>
                </div>
                <div class="view360-hotspot hallway link" :data-yaw="5" :data-pitch="23.5"><router-link
                        to="/pos3"></router-link></div>
            </div>
        </View360>
    </div>
</template>