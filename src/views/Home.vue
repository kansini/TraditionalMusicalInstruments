<script lang="ts" setup>
import {ref} from "vue";
import TmiCategory from "@/components/Category.vue";
import TmiCursor from "@/components/kits/CustomCursor.vue";
import TmiMenuBar from "@/components/MenuBar.vue";
import {ICategory} from "@/types/data";
import {bgColors} from "@/resource"

const cursorSize = ref('large')
const cursorInnerText = ref('樂')
const bgIndex = ref(0)
const playAudio = ref(false)
const onMouseover = (item: ICategory) => {
  playAudio.value = true
  cursorSize.value = 'small'
  cursorInnerText.value = item.pinyin
  bgIndex.value = item.id
}
const onMouseoverMenu = (name: string) => {
  cursorSize.value = 'small'
  cursorInnerText.value = name
}
const onMouseleave = () => {
  cursorSize.value = 'large'
  cursorInnerText.value = '八音'
  bgIndex.value = 0
}
</script>
<template>
  <tmi-menu-bar @mouseenter="onMouseoverMenu"/>
  <div
      class="home"
      @mouseenter="onMouseleave"
      :style="{background: bgColors[bgIndex]}"
  >
    <tmi-cursor :size="cursorSize" :inner-text="cursorInnerText"/>
    <tmi-category
        @mouseover="onMouseover"
        @mouseleave="onMouseleave"
    />
    <div class="title">\中\國\傳\統\樂\器\</div>
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
  transition: all ease-in-out 1s;

  .title {
    font-size: 18px;
    letter-spacing: 24px;
    writing-mode: vertical-rl;
    color: $primary-color;
  }
}
</style>
