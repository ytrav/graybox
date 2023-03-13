<script lang="ts">
import { computed } from "vue";
import { View360, EquirectProjection } from "@egjs/vue3-view360";
import { useStore } from "vuex";

export default {
    data() {
        return {
            chestClicked: false,
            keyPickedUp: false,
        }
    },
    setup() {
        const projection = new EquirectProjection({
            src: "../../src/assets/scenes/scene3.png",
        })
        const store = useStore()

        var inventory = computed(() => {
            return store.state.inventory;
        })

        return {
            setDialogue: (obj: object) => store.commit('setDialogue', obj),
            invAdd: (item: string) => store.commit('inventoryAdd', item),
            inventory,

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
                case 'chest':
                    if (!this.chestClicked) {
                        this.setDialogue({
                            heading: '*',
                            text: `It appears to be a box, with a little pedestal.      On the pedestal you can see a key.`
                        })
                        this.chestClicked = true;
                    } else if (!this.inventory.includes('key')) {
                        this.setDialogue({
                            heading: '*',
                            text: `You decided to pick up the key and put it into your pocket.         The key is cold,      but you enjoy the feeling of holding it in your hand.`
                        })
                        this.invAdd('key');
                        this.keyPickedUp = true;
                    } else {
                        this.setDialogue({
                            heading: '*',
                            text: `An empty pedestal.               You don't feel like returning the key.`
                        })
                    }
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
                <div class="view360-hotspot chest" @click="flavorText('chest')" data-yaw="0" data-pitch="50">
                </div>
            </div>
        </View360>
    </div>
</template>