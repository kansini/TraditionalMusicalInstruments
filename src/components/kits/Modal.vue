<script setup lang="ts">
import TmiTitle from "@/components/kits/Title.vue";
import TmiButton from "@/components/kits/Button.vue";
import {useCursorStore} from "@/store";

const cursorState = useCursorStore()

const show = defineModel('show', {
  default: false,
})
defineProps({
  title: {
    type: String,
    default: ''
  },
  bgColor: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <teleport to="body">
    <transition name="fadeDown">
      <div
          class="tmi-modal"
          :style="{background:bgColor}"
          v-if="show"
      >
        <div class="tmi-modal-header">
          <tmi-button
              text="关"
              @mouseenter="cursorState.setCursor('mini','')"
              @mouseleave="cursorState.setCursor('default')"
              @click="show = false"
          />
        </div>
        <div class="tmi-modal-content">
          <tmi-title :title="title" direction="vertical"/>
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.tmi-modal {
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: rgba(255, 255, 255, .85);
  backdrop-filter: saturate(120%) blur(10px);

  .tmi-modal-header {
    width: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
  }

  .tmi-modal-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: calc(100% - 72px);
    padding: 0 40px;
    overflow-y: auto;
    writing-mode: vertical-rl;
    gap: 24px;
    font-size: 18px;
  }
}
</style>