<template>
  <VueFinalModal v-slot="{ close }" :content-class="['modal-content', size]" classes="modal-container">
    <div class="modal">
      <div v-if="isCloseIcon" class="modal__icon cursor-pointer" @click="close">
        <IconClose />
      </div>
      <h2 class="modal__title">
        <slot name="title">
          Заголовок
        </slot>
      </h2>
      <slot />
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import IconClose from './icons/IconClose.vue'

defineProps({
  isCloseIcon: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="postcss">
:deep(.sm) {
  @apply max-w-xl;
}
:deep(.xl) {
  @apply max-w-5xl
}

.modal {
  @apply w-full m-auto px-15 py-9 bg-[#202225] relative
  border border-solid border-[#25272B] rounded-lg
  <sm: px-5;

  :deep(&-container) {
    @apply flex justify-center items-center;
  }

  :deep(&-content) {
    @apply flex w-full;
  }

  &__title {
    @apply mb-3 text-center;
  }

  &__icon {
    @apply p-1.75 absolute top-3.25 right-5.75 bg-[#25272B] rounded-full leading-0;
  }
}
</style>
