<script lang="ts" setup>
import {ref} from "vue";
import TmiCategory from "@/components/Category.vue";
import TbCursor from "@/components/kits/CustomCursor.vue";
import {ICategory} from "@/types/data";

const cursorSize = ref('large')
const cursorInnerText = ref('樂')
const onMouseover = (item: ICategory) => {
  cursorSize.value = 'small'
  cursorInnerText.value = item.pinyin
}
const onMouseleave = () => {
  cursorSize.value = 'large'
  cursorInnerText.value = '樂'
}
</script>
<template>
  <div class="home">
    <tb-cursor :size="cursorSize" :inner-text="cursorInnerText"/>
    <tmi-category
        @mouseover="onMouseover"
        @mouseleave="onMouseleave"
    />
    <div class="title">/中/國/傳/統/樂/器/</div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0 64px;
  height: 100vh;
  background: $tmi-bg;

  .title {
    font-size: 32px;
    letter-spacing: 24px;
    writing-mode: vertical-rl;
    color: $primary-color;
  }
}
</style>
