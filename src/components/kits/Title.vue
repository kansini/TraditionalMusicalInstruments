<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: ''
  },
  fontSize: {
    type: Number,
    default: 24
  },
  direction: {
    type: String as () => 'horizontal' | 'vertical',
    default: 'horizontal'
  }
})
const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>

<template>
  <div class="title-container" :class="{ 'vertical': direction === 'vertical'}">
    <div class="title inset-circle" @click="handleClick">
      <div
          class="title-text"
          :style="{'font-size': `${fontSize}px`}"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-container {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    min-width: 128px;
    height: 56px;
    border-radius: 20px;
    user-select: none;
    transition: all ease-in .3s;
    cursor: pointer;
    overflow: hidden;
   color:$color-light;

    &.inset-circle {
      background-size: 70% 70%;
      background-image: radial-gradient(
              circle at 100% 100%,
              transparent 0,
              transparent 12px,
              $primary-color 12px
      ),
      radial-gradient(
              circle at 0 0,
              transparent 0,
              transparent 12px,
              $primary-color 12px
      ),
      radial-gradient(
              circle at 100% 0,
              transparent 0,
              transparent 12px,
              $primary-color 12px
      ),
      radial-gradient(
              circle at 0 100%,
              transparent 0,
              transparent 12px,
              $primary-color 12px
      );
      background-repeat: no-repeat;
      background-position: right bottom, left top, right top, left bottom;
    }

    .title-text {
      letter-spacing: 8px;
    }
  }

  &.vertical {
    .title {
      padding: 24px 0;
      width: 56px;
      min-width: 56px;
      height: max-content;

      .title-text {
        width: 34px;
        line-height: 1.5;
      }

    }
  }
}


</style>