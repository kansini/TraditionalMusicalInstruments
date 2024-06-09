<script setup lang="ts">
import {reactive} from "vue";
import {ICategory} from "@/types/data";

const categoryList = reactive<ICategory[]>([
  {
    id: 1,
    name: '丝',
    pinyin: 'sī'
  },
  {
    id: 2,
    name: '竹',
    pinyin: 'zhú'
  },
  {
    id: 3,
    name: '木',
    pinyin: 'mù'
  },
  {
    id: 4,
    name: '石',
    pinyin: 'shí'
  },
  {
    id: 5,
    name: '金',
    pinyin: 'jĩn'
  },
  {
    id: 6,
    name: '土',
    pinyin: 'tǔ'
  },
  {
    id: 7,
    name: '匏',
    pinyin: 'páo'
  },
  {
    id: 8,
    name: '革',
    pinyin: 'gé'
  }])
const emit = defineEmits(['mouseover', 'mouseleave'])
const onMouseover = (item: ICategory) => {
  emit('mouseover', item)
}
const onMouseleave = () => {
  emit('mouseleave')
}
</script>

<template>
  <div class="tmi-category">
    <div class="tmi-category-list">
      <div class="tmi-category-item"
           v-for="item in categoryList"
           :key="item.id"
           @mouseenter="onMouseover(item)"
           @mouseleave="onMouseleave"
      >
        <div class="tmi-category-item-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tmi-category {
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "FangZhengFangSong", serif;

  .tmi-category-list {
    width: 80%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;

    .tmi-category-item {
      font-size: 48px;
      color: $primary-color;
      cursor: pointer;
    }
  }
}
</style>