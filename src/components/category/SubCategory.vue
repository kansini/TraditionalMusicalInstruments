<script setup lang="ts">
// import {ref} from "vue";
import {IInstrument} from "@/types/data";
import userMotion from "../useMotion";
import TmiTitle from "../kits/Title.vue";
import CateItem from "./Item.vue"
import TmiButton from "../kits/Button.vue"
import {useCursorStore, useCurrentStore} from "@/store";

const cursorState = useCursorStore();
const currentState = useCurrentStore();
const {motionOption} = userMotion();

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  data: {
    type: Array as () => IInstrument[],
    required: true
  }
})
const emit = defineEmits(['close', 'mouseover', 'mouseleave', 'click'])
const onClose = () => {
  emit('close')
}
const onMouseover = (item: IInstrument) => {
  cursorState.setCursor('large', item.name);
  emit('mouseover', item)
}
const onMouseleave = () => {
  cursorState.text = props.title
  emit('mouseleave')
}
const onMouseoverClose = () => {
  cursorState.size = 'mini'
  cursorState.text = ''
}

const handleClickItem = (item: IInstrument, index: number) => {
  currentState.setCurrent(index)
  emit('click', item)
}
</script>

<template>
  <div class="sub-category">
    <tmi-title
        v-motion
        :initial="motionOption.initial"
        :enter="motionOption.enter"
        :title="title"
    />
    <div class="sub-category-list">
      <template v-for="(item,index) in data">
        <cate-item
            v-motion
            :initial="motionOption.initial"
            :enter="motionOption.enter"
            :delay="20 + 100 * index"
            :data="item"
            :is-active="currentState.current === index"
            @click="handleClickItem(item,index)"
            @mouseenter="onMouseover(item)"
            @mouseleave="onMouseleave"
        />
      </template>
    </div>
    <tmi-button
        :text="'返'"
        @mouseenter="onMouseoverClose"
        @click="onClose"
    />
  </div>
</template>

<style scoped lang="scss">
.sub-category {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .sub-category-list {
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 32px;

    .sub-category-list-item {
      font-size: 32px;
      color: #000;
      cursor: pointer;
      writing-mode: tb-rl;
      transition: transform 0.3s ease-in-out;

      .sub-category-item-name {
        transition: all ease-in-out .5s;

        &:hover {
          transform: scale(2);
        }
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
    font-size: 24px;
    cursor: pointer;
    transition: all ease-in .3s;
    color: #fff;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>