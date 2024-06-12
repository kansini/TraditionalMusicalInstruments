<script setup lang="ts">
import {useFullscreen} from "@vueuse/core";

const el = document.querySelector('body')
const {toggle} = useFullscreen(el)
const emit = defineEmits(['mouseenter'])
</script>

<template>
  <div class="fullscreen-trigger-container">
    <div
        class="fullscreen-trigger"
        @mouseenter="emit('mouseenter')"
        @click="toggle">
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
    border: 6px solid #68361A;
    mix-blend-mode: difference;
    transition: all ease-in .3s;
    cursor: pointer;

    &:hover {
      border: 4px solid #68361A;
      transform: scale(1.2);
    }
  }
}


</style>