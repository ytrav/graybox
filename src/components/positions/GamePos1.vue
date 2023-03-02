<script lang="ts">
import { View360, CylindricalProjection } from "@egjs/vue3-view360";

export default {
    setup() {
        const projection = new CylindricalProjection({
            src: "../../src/assets/scenes/scene1.png",
            partial: true
        })
        return {
            projection,
            initialZoom: 5,
            zoomRange: [0.5, 3],
            disableContextMenu: true
        }
    },
    components: {
        View360
    },
    props: {
        initialZoom: {
            type: Number,
            default: 1
        },
        disableContextMenu: {
            type: Boolean,
            default: false
        },
        zoomRange: {
            type: Object as => Range,

            default: () => ({
                min: 0,
                max: 5
            }),
            validator: (val: any) => typeof val.min === 'number' && typeof val.max === 'number'
        }
    }
}
</script>

<template>
    <div class="scene">
        <View360 :projection="projection" :initial-zoom="2.5" :zoom-range="{ min: 0.5, max: 3 }" :disableContextMenu="true"
            style="width: 100%; height: 100%;" />
    </div>
</template>