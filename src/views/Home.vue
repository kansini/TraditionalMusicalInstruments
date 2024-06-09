<script lang="ts" setup>
import {reactive, ref} from "vue";
import TmiCategory from "@/components/Category.vue";
import TmiCursor from "@/components/kits/CustomCursor.vue";
import TmiMenuBar from "@/components/MenuBar.vue"
import {ICategory} from "@/types/data";

const cursorSize = ref('large')
const cursorInnerText = ref('樂')
const bgIndex = ref(0)
const bgColors = reactive(["#DFD7C2", "#C6BEB1", "#b1d5c8", "#80a492", "#A88787", "#9E8C6B", "#CC5D20", "#BEA89D"])
const onMouseover = (item: ICategory) => {
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
  transition: all ease .5s;

  .title {
    font-size: 18px;
    letter-spacing: 24px;
    writing-mode: vertical-rl;
    color: $primary-color;
  }
}
</style>
