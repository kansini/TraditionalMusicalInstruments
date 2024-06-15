<script setup lang="ts">
import {IInstrument} from "@/types/data";
import TmiButton from "@/components/kits/Button.vue";
import {useCurrentStore, useCursorStore} from "@/store";

const currentState = useCurrentStore();
const cursorState = useCursorStore();

defineProps({
  data: {
    type: Object as () => IInstrument,
    default: () => {
      return {}
    }
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['click', 'close'])
const onclick = () => {
  emit('click')
}
const onClose = () => {
  currentState.setCurrent(-1);
  console.log('close', currentState.current)
  emit('close')
}
</script>

<template>
  <div class="cate-item-container" :class="{'is-active': isActive}">
    <div class="cate-item"
         :class="{'is-active': isActive}"
         :style="{'background-image': `url(./img/${data.image}.png)`}"
         @click="onclick"
    >
      <div class="cate-item-title">
        <div class="item-title-name">{{ data.name }}</div>
        <div class="item-title-pinyin">{{ data.pinyin }}</div>
      </div>
      <transition name="fadeIn">
        <div class="cate-item-desc" v-if="isActive">
          <p v-for="p in data.desc">{{ p }}</p>
        </div>
      </transition>
    </div>
    <transition name="fadeIn">
      <tmi-button
          v-if="isActive"
          class="btn-close"
          text="返"
          @click="onClose"
          @mouseenter="cursorState.size='mini'"
          @mouseleave="cursorState.size='large'"
      />
    </transition>
  </div>
</template>

<style scoped lang="scss">
.cate-item-container {
  position: relative;
  width: 160px;
  height: 480px;
  transition: all ease-in-out .4s;

  .cate-item {
    position: relative;
    width: 100%;
    height: 100%;
    background: $color-light center no-repeat;
    background-size: auto 100%;
    border-radius: 16px;
    overflow: hidden;
    transition: all ease-in-out 1s;
    padding: 24px 16px;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    left: 0;
    top: 0;

    &:not(.is-active)::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: rgba(104, 50, 26, .65);
      transition: all ease-in-out .5s;
    }

    &:not(.is-active):hover {
      background-size: auto 140%;

      &::before {
        background: rgba(104, 50, 26, .3);
      }

      .cate-item-title {
        transform: scale(1.2) translate(-4px, 8px);
      }
    }

    .cate-item-title {
      position: absolute;
      right: 24px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      writing-mode: tb-rl;
      transition: all ease-in-out .4s;

      .item-title-pinyin {
        font-size: 18px;
      }
    }

    .cate-item-desc {
      width: 100%;
      font-size: 20px;
      writing-mode: vertical-rl;
      padding: 16px 160px 0 0;
      color: #000;
      line-height: 2;
      letter-spacing: 4px;
      height: 90vh;
    }

    &.is-active {
      border-radius: 0;
      flex-shrink: 0;
      z-index: 999;
      background: $color-light 0 center no-repeat;
      background-size: auto 75%;

      .cate-item-title {
        color: $primary-color;
        font-size: 80px;

        .item-title-pinyin {
          font-size: 24px;
          margin-top: 12px;
        }
      }
    }
  }

  &.is-active {
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 999;
  }

  .btn-close {
    position: absolute;
    left: 24px;
    top: 24px;
    z-index: 999;
  }
}

</style>