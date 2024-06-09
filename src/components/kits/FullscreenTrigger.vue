<script setup lang="ts">
import {useFullscreen} from "@vueuse/core";

const el = document.querySelector('body')
const {toggle} = useFullscreen(el)
const emit = defineEmits(['mouseenter'])
</script>

<template>
  <div
      class="fullscreen-trigger"
      @mouseenter="emit('mouseenter')"
      @click="toggle">
    <div></div>
  </div>
</template>

<style scoped lang="scss">
.fullscreen-trigger {
  width: 24px;
  height: 24px;
  border-radius: 20px;
  border: 5px solid rgba(255, 255, 255, .6);
  mix-blend-mode: difference;
  transition: all ease-in .3s;
  cursor: pointer;

  &:hover {
    border: 4px solid rgba(255, 255, 255, .9);
    transform: scale(1.2);
  }
}


</style>