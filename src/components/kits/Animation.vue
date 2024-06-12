<script lang="ts" setup>
import lottie from "lottie-web"
import {uuid} from "@/utils/uuid"
import {onMounted, ref} from "vue"

const props = defineProps({
  name: {
    type: String,
    default: "music"
  },
  height: {
    type: Number,
    default: 24
  },
  width: {
    type: Number,
    default: 24
  },
  renderer: {
    type: String,
    default: 'canvas'
  },
  background: {
    type: String,
    default: 'transparent'
  },
  aniOption: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const id = uuid('ani-')
const init = () => {
  const cv: any = document.getElementById(id)
  lottie.loadAnimation({
    container: cv,
    renderer: 'canvas',
    loop: true,
    autoplay: false,
    path: `./aniList/${props.name}.json`
  })
}
const emit = defineEmits(['mouseenter', 'click'])
const isPlay = ref(false)
const onClick = () => {
  isPlay.value = !isPlay.value
  emit('click', isPlay.value)
  if (isPlay.value) {
    lottie.play()
  } else {
    lottie.stop()
  }
}
onMounted(() => {
  init()
})

</script>
<template>
  <div
      class="ani-container"
      :id="id"
      :style="{width:`${width}px` ,height:`${height}px`,background:background}"
      @mouseenter="emit('mouseenter')"
      @click="onClick"
  >
  </div>
</template>
<style lang="scss" scoped>
.ani-container {
  cursor: pointer;
}
</style>
