<script setup lang="ts">
import {useFullscreen} from "@vueuse/core";
import {useFullScreenStore} from "@/store";

const fullScreenStore = useFullScreenStore()

const el = document.querySelector('body')
const {toggle} = useFullscreen(el)
const toggleFullScreen = () => {
  toggle()
  fullScreenStore.toggleFullScreen()
}
const emit = defineEmits(['mouseenter'])
</script>

<template>
  <div class="fullscreen-trigger-container">
    <div
        class="fullscreen-trigger"
        :class="{'fullscreen-trigger-active': fullScreenStore.isFullScreen}"
        @mouseenter="emit('mouseenter')"
        @click="toggleFullScreen">
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fullscreen-trigger-container {

  .fullscreen-trigger {
    width: 24px;
    height: 24px;
    border-radius: 20px;
    border: 6px solid $primary-color;
    transition: all ease-in .3s;
    cursor: pointer;

    &:hover {
      border: 0 solid #68361A;
      background: $primary-color;
      transform: scale(1.2);
    }

    &.fullscreen-trigger-active {
      border: 0 solid #68361A;
      background: $primary-color;

      &:hover {
        border-radius: 20px;
        border: 6px solid $primary-color;
        background: transparent;
      }
    }
  }


}


</style>