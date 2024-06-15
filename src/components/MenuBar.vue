<script setup lang="ts">
import GithubIcon from "./kits/GithubIcon.vue";
import FullscreenTrigger from "./kits/FullscreenTrigger.vue";
import TmiAudio from "./kits/Audio.vue";
import TmiInfo from "./kits/Info.vue";
import {useFullScreenStore} from "@/store";

const emit = defineEmits(["mouseenter", "clickItem"])
const fullScreenStore = useFullScreenStore()
const onMouseenter = (name: string) => {
  console.log(name)
  emit("mouseenter", name)
}
const onMouseenterAni = (name: string) => {
  onMouseenter(name)
}

</script>

<template>
  <div class="bav-bar">
    <div class="icon-container">
      <tmi-info @mouseenter="onMouseenter('言')"/>
    </div>
    <div class="icon-container">
      <fullscreen-trigger @mouseenter="onMouseenter(fullScreenStore.isFullScreen ?'退':'全')"/>
    </div>
    <div class="icon-container">
      <github-icon @mouseenter="onMouseenter('庫')"/>
    </div>
    <div class="icon-container">
      <tmi-audio @mouseenter="onMouseenterAni"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bav-bar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .icon-container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>