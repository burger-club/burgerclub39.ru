<template>
  <VueFinalModal content-class="modal-content" classes="modal-container">
    <div class="modal">
      <div v-if="isCloseIcon" class="modal__icon cursor-pointer" @click="$emit('closeModal')">
        <IconClose />
      </div>

      <slot />
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import IconClose from './icons/IconClose.vue'

defineEmits(['closeModal'])

defineProps({
  isCloseIcon: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="postcss">
.modal {
  @apply max-w-5xl w-full m-auto px-25 pt-14 pb-19 bg-[#202225] relative border border-solid border-[#25272B] rounded-lg;

  :deep(&-container) {
    @apply flex justify-center items-center;
  }

  :deep(&-content) {
    @apply flex max-w-5xl w-full;
  }

  &__icon {
    @apply p-0.5 absolute top-3.25 right-5.75 bg-[#25272B] rounded-full leading-0;
  }
}
</style>
