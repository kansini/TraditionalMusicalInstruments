<script lang="ts" setup>
import {ref} from "vue";
import TmiCategory from "@/components/category/Category.vue";
import TmiCursor from "@/components/kits/CustomCursor.vue";
import TmiMenuBar from "@/components/MenuBar.vue";
import {bgColors} from "@/resource";
import {useCursorStore, useBgStore} from "@/store";
import {IInstrument} from "@/types/data";
const cursorState = useCursorStore();
const bgState = useBgStore();

const onMouseoverMenu = (name: string) => {
  cursorState.size = 'small'
  cursorState.text = name
};

const showDetail = ref(false);
const detailTitle = ref('')
const onclickItem = (item: IInstrument) => {
  showDetail.value = true;
  detailTitle.value = item.name
}
</script>
<template>
  <tmi-menu-bar @mouseenter="onMouseoverMenu"/>
  <div
      class="home"
      :style="{background: `${bgColors[bgState.bgIndex]} no-repeat center`}"
  >
    <tmi-cursor :size="cursorState.size" :inner-text="cursorState.text"/>
    <tmi-category @click-item="onclickItem"/>
    <div class="title">中\國\傳\統\樂\器</div>
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
  background-image: url("../assets/img/gongche.png") !important;
  background-size: 100% auto !important;
  transition: all ease-in-out 1s;

  .title {
    font-size: 24px;
    letter-spacing: 16px;
    writing-mode: vertical-rl;
    color: $primary-color;
  }
}
</style>
