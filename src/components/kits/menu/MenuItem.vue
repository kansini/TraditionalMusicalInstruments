<script setup lang="ts">
import {ref} from "vue";
import PModal from "../Modal.vue"

const emit = defineEmits(["mouseenter"])
defineProps({
  text: {
    type: String,
    default: "录"
  }
})
const showModal = ref(false)
</script>

<template>
  <div class="info-btn-container">
    <div class="info-btn"
         @mouseenter="emit('mouseenter')"
         @click="showModal = true"
    >
      <i class="info-btn-inner">{{ text }}</i>
    </div>
  </div>
  <p-modal v-model:show="showModal">
    <slot></slot>
  </p-modal>
</template>

<style scoped lang="scss">
.info-btn-container {
  .info-btn {
    width: 24px;
    height: 24px;
    border-radius: 20px;
    background: $primary-color;
    color: $color-light;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in .3s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      box-shadow: inset 0 0 0 2px $primary-color;
      background: transparent;
      color: $primary-color;
      font-size: 16px;
      transform: scale(1.2);
    }
  }
}

.info-content {
  display: flex;
  padding: 24px 0;
  gap: 24px;
  flex-direction: column;
  line-height: 2;
  font-size: 20px;
  color: $primary-color;
}

</style>