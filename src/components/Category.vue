<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {ICategory} from "@/types/data";
import {getList} from "@/api/getList";
import Audio from "@/components/kits/Audio.vue";
import {audios} from "@/resource";
import SubCategory from "./SubCategory.vue";
import userMotion from "./useMotion";
import {useMuteStore} from "@/store";

const state = useMuteStore();

const {motionOption} = userMotion()
const categoryList = reactive<ICategory[]>([])
const emit = defineEmits(['click', 'mouseover', 'mouseleave'])
const onMouseover = (item: ICategory) => {
  current.value = item.id
  // playAudio()
  emit('mouseover', item)
}

const onMouseleave = () => {
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
const subCateData = reactive([])
const subCateTitle = ref('')
const onClick = (item: ICategory) => {
  playAudio()
  emit('click', item)
  showSubCate.value = true
  subCateTitle.value = item.name
  Object.assign(subCateData, item.instruments)
}
const onCloseSubCate = () => {
  showSubCate.value = false
  pauseAudio()
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
    <audio ref="player" autoplay :muted="state.isMute" v-if="current === item.id">
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
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        .tmi-category-item-name {
          transform: scale(2);
        }

      }
    }
  }
}
</style>