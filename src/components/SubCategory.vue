<script setup lang="ts">
import {IInstrument} from "@/types/data";
import userMotion from "./useMotion";

const {motionOption} = userMotion()

defineProps({
  title: {
    type: String,
    required: true
  },
  data: {
    type: Array as () => IInstrument[],
    required: true
  }
})
const emit = defineEmits(['close', 'mouseover', 'mouseleave'])
const onClose = () => {
  emit('close')
}
const onMouseover = (item: IInstrument) => {
  emit('mouseover', item)
}
const onMouseleave = () => {
  emit('mouseleave')
}
</script>

<template>
  <div class="sub-category">
    <div class="sub-category-title"
         v-motion
         :initial="motionOption.initial"
         :enter="motionOption.enter">
      {{ title }}
    </div>
    <div class="sub-category-list">
      <div class="sub-category-list-item"
           v-for="(item,index) in data"
           v-motion
           :initial="motionOption.initial"
           :enter="motionOption.enter"
           :delay="20 + 100 * index"
           @mouseenter="onMouseover(item)"
           @mouseleave="onMouseleave"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="sub-category-close" @click="onClose">
      <span>×</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sub-category {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  .sub-category-title {
    font-size: 48px;
    color: $primary-color;
  }

  .sub-category-list {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-evenly;

    .sub-category-list-item {
      font-size: 32px;
      color: $primary-color;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(2);
      }
    }
  }

  .sub-category-close {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    cursor: pointer;
    transition: all ease-in .3s;

    &:hover {
      transform: rotate(90deg);
    }
  }
}
</style>