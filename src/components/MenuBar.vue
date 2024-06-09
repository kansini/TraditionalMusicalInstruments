<script setup lang="ts">
import GithubIcon from "./kits/GithubIcon.vue";
import FullscreenTrigger from "./kits/FullscreenTrigger.vue";

const emit = defineEmits(["mouseenter", "clickItem"])

const onMouseenter = (name: string) => {
  emit("mouseenter", name)
}
</script>

<template>
  <div class="bav-bar">
    <fullscreen-trigger @mouseenter="onMouseenter('全')"/>
    <github-icon @mouseenter="onMouseenter('庫')"/>
  </div>
</template>

<style scoped lang="scss">
.bav-bar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
</style>