<script setup lang="ts">
import TmiTitle from "@/components/kits/Title.vue";
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
          <div class="tmi-modal-close"
               @mouseenter="cursorState.setCursor('small','关')"
               @mouseleave="cursorState.setCursor('default')"
               @click="show = false"
          >
            <span>×</span>
          </div>
        </div>
        <div class="tmi-modal-content">
          <tmi-title :title="title"/>
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
  background: rgba(255, 255, 255, .5);
  backdrop-filter: saturate(120%) blur(10px);

  .tmi-modal-header {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .tmi-modal-close {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      cursor: pointer;
      transition: all ease-in .3s;

      &:hover {
        transform: rotate(90deg);
      }
    }
  }

  .tmi-modal-content {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100% - 40px);
    overflow-y: auto;
  }
}
</style>