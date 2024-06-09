<script setup lang="ts">
import {onMounted, reactive} from "vue";
import {ICategory} from "@/types/data";
import {getList} from "@/api/getList";

const categoryList = reactive<ICategory[]>([])
const emit = defineEmits(['click', 'mouseover', 'mouseleave'])
const onMouseover = (item: ICategory) => {
  emit('mouseover', item)
}
const onClick = (item: ICategory) => {
  emit('click', item)
}
const onMouseleave = () => {
  emit('mouseleave')
}
const getData = () => {
  getList('/category.json')
      .then((res: any) => categoryList.push(...res.data))

}
onMounted(() => {
  getData()
})
</script>

<template>
  <div class="tmi-category">
    <div class="tmi-category-list">
      <div class="tmi-category-item"
           v-for="item in categoryList"
           :key="item.id"
           @click="onClick(item)"
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
      font-size: 32px;
      color: $primary-color;
      cursor: pointer;
    }
  }
}
</style>