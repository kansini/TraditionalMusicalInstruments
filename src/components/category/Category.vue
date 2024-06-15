<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {ICategory} from "@/types/data";
import {getList} from "@/api/getList";
import Audio from "@/components/kits/Audio.vue";
import {audios} from "@/resource";
import SubCategory from "./SubCategory.vue";
import userMotion from "../useMotion";
import {useMuteStore, useBgStore, useCursorStore} from "@/store";

const muteState = useMuteStore();
const cursorState = useCursorStore();
const bgState = useBgStore();

const {motionOption} = userMotion()
const categoryList = reactive<ICategory[]>([])
const emit = defineEmits(['click', 'mouseover', 'mouseleave', 'back', 'clickItem'])
const onMouseover = (item: ICategory) => {
  current.value = item.id
  cursorState.setCursor('small', item.pinyin);
  bgState.bgIndex = item.id
  // playAudio()
  emit('mouseover', item)
}

const isClick = ref(false)
const onMouseleave = () => {
  cursorState.size = 'large'
  if (!isClick.value) {
    cursorState.text = '八音'
    bgState.bgIndex = 0
  }
  emit('mouseleave')
}
const getData = () => {
  getList('/category.json')
      .then((res: any) => categoryList.push(...res.data))

}
const player = ref()
const playAudio = () => {
  player.value[0].play().catch(() => {
  });
};

const pauseAudio = () => {
  player.value[0].pause();
};
const current = ref(1)
const showSubCate = ref(false)
const subCateData = ref([{id: 0, name: '', pinyin: '', image: ''}])
const subCateTitle = ref('')
const onClick = (item: ICategory) => {
  isClick.value = true
  playAudio()
  emit('click', item)
  bgState.bgIndex = item.id
  cursorState.text = item.name
  showSubCate.value = true
  subCateTitle.value = item.name
  subCateData.value = item.instruments
}
const onCloseSubCate = () => {
  isClick.value = false
  bgState.bgIndex = 0
  showSubCate.value = false
  pauseAudio()
  emit('back')
}
const onClickItem = (item: ICategory) => {
  emit('clickItem', item)
}
onMounted(() => {
  getData()
})
</script>

<template>
  <sub-category
      v-if="showSubCate"
      :data="subCateData"
      :title="subCateTitle"
      @close="onCloseSubCate"
      @onMouseover="onMouseover"
      @mouseleave="onMouseleave"
      @click="onClickItem"
  />
  <div class="tmi-category" v-else>
    <div class="tmi-category-list">
      <div class="tmi-category-item"
           v-for="(item,index) in categoryList"
           v-motion
           :initial="motionOption.initial"
           :enter="motionOption.enter"
           :delay="20 + 100 * index"
           :key="item.id"
           @click="onClick(item)"
           @mouseenter="onMouseover(item)"
           @mouseleave="onMouseleave"
      >
        <div class="tmi-category-item-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
  <template v-for="item in categoryList">
    <audio ref="player" autoplay :muted="muteState.isMute" v-if="current === item.id">
      <source :src="`./audio/${audios[item.id]}.mp3`" type="audio/mp3">
    </audio>
  </template>
</template>

<style scoped lang="scss">
.tmi-category {
  width: 100%;
  display: flex;
  justify-content: center;

  .tmi-category-list {
    width: 80%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;

    .tmi-category-item {
      font-size: 36px;
      color: $primary-color;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      .tmi-category-item-name {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        .tmi-category-item-name {
          transform: scale(1.5);
          color: $color-light;
          background: $primary-color;
          border-radius: 50%;
        }

      }
    }
  }
}
</style>