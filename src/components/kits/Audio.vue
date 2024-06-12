<script setup lang="ts">
import {ref} from "vue";
import TmiAnimation from "@/components/kits/Animation.vue";
import {useMuteStore} from "@/store";

const state = useMuteStore();

defineProps({
  name: {
    type: String,
    default: 'bgm'
  }
})

const isPlay = ref(false)
const onClickAni = (val: boolean) => {
  isPlay.value = val
  state.toggleMute()
  // if (val) {
  //   playAudio()
  // } else {
  //   pauseAudio()
  // }
}
const emit = defineEmits(['mouseenter'])
const onMouseenterAni = () => {
  const name = isPlay.value ? "静" : "音";
  emit('mouseenter', name)
}

// const audioPlayer = ref()
// const playAudio = () => {
//   audioPlayer.value.play();
// };
//
// const pauseAudio = () => {
//   audioPlayer.value.pause();
// };
</script>

<template>
<!--  <audio ref="audioPlayer" autoplay muted>-->
<!--    <source :src="`./audio/${name}.mp3`" type="audio/mp3">-->
<!--  </audio>-->
  <tmi-animation
      name="music"
      @click="onClickAni"
      @mouseenter="onMouseenterAni"
  />
</template>

<style scoped lang="scss">

</style>