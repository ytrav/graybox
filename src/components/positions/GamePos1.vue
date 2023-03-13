<script lang="ts">
import { View360, CylindricalProjection } from "@egjs/vue3-view360";
import { useStore } from "vuex";

export default {
    data() {
        return {
            lightClicked: false,
            boxClicked: false,
            exitClicked: false,
        }
    },
    setup() {
        const projection = new CylindricalProjection({
            src: "../../src/assets/scenes/scene1.png",
            partial: true
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
                case 'light':
                    if (!this.lightClicked) {
                        this.setDialogue({
                            heading: '*',
                            text: `This lighting looks weird.       It's shining,        but there's no light source.              Where even are you?`
                        })
                        this.lightClicked = true;
                    } else {
                        this.setDialogue({
                            heading: '*',
                            text: `It still makes me uncomfortable.`
                        })
                    }
                    break;
                case 'exit':
                    if (!this.exitClicked) {
                        this.setDialogue({
                            heading: '*',
                            text: `Appears to be some sort of a door.       It's locked.`
                        })
                        this.exitClicked = true;
                    } else {
                        this.setDialogue({
                            heading: '*',
                            text: `Maybe you need some sort of a key to open it?        Better start looking.`
                        })
                    }
                    break;
                case 'box':
                    if (!this.boxClicked) {
                        this.setDialogue({
                            heading: '*',
                            text: `It's a box, with boxes stacked on top of it.                     This is the first time you see a box sculpture like this.`
                        })
                        this.boxClicked = true;
                    } else {
                        this.setDialogue({
                            heading: '*',
                            text: `Oh wow.    There are two of these.               Who put these here?         And why?`
                        })
                    }


                default:
                    break;
            }
        },
    }
}
</script>

<template>
    <div class="scene">
        <View360 :hotspot="{ 'zoom': true }" :projection="projection" :initial-zoom="3.5" :disableContextMenu="true"
            :useGrabCursor="false" :wheelScrollable="true" :fov="90" style="width: 100%; height: 100%;">
            <div class="view360-hotspots">
                <div class="view360-hotspot door link" :data-yaw="13.5" :data-pitch="17.6"><router-link
                        to="/pos2"></router-link></div>
                <div class="view360-hotspot exit link" :data-yaw="0.7" :data-pitch="20"><router-link
                        to="/pos4"></router-link></div>
                <div @click="flavorText('box')" class="view360-hotspot box1" :data-yaw="-3.6" :data-pitch="19.2"></div>
                <div @click="flavorText('box')" class="view360-hotspot box2" :data-yaw="7.5" :data-pitch="21.3"></div>
                <div @click="flavorText('light')" class="view360-hotspot light" :data-yaw="3" :data-pitch="30.8"></div>

            </div>
        </View360>
    </div>
</template>