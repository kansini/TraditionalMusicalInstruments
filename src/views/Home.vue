<template>
  <div class="home">
    <tb-cursor :size="cursorSize"/>
    <div class="title">中國傳統樂器</div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import TbCursor from "@/components/kits/CustomCursor.vue";

const cursorSize = ref('large')


</script>
<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .title {
    font-size: 32px;
    letter-spacing: 8px;
    writing-mode: vertical-rl;
    color: $primary-color;
  }
}
</style>
