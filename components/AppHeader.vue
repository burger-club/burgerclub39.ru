<template>
  <header class="header">
    <AppLogo :is-header="true" />

    <div class="header__right-content">
      <AppTelephone class="header__telephone" />

      <div class="header__cart-wrapper" @click="showModal">
        <IconCart class="cursor-pointer" />
        <div v-if="productsCount" class="header__circle">
          {{ productsCount }}
        </div>
      </div>
    </div>

    <ModalCart v-model="isShowModal" @close-modal="showModal" />
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AppTelephone from './AppTelephone.vue'
import IconCart from './icons/IconCart.vue'
import ModalCart from './ModalCart.vue'
import AppLogo from './AppLogo.vue'
import { useCartStore } from '~/store'

const isShowModal = ref(false)

const cartStore = useCartStore()
const productsCount = computed(() => cartStore.getProductsCount)

function showModal () {
  isShowModal.value = !isShowModal.value
}
</script>

<style scoped lang="postcss">
.header {
  @apply px-7.5 flex items-center justify-between h-[var(--header-height)] w-full;

  &__cart-wrapper {
    @apply relative;
  }

  &__circle {
    @apply w-5 h-5 absolute -right-2 top-0 bg-yellow-500 rounded-[50%]
    flex items-center justify-center text-white text-xs leading-4.5 font-medium;
  }

  &__right-content {
    @apply flex items-center gap-12.5;
  }

  &__telephone {
    @apply <sm:hidden;
  }
}
</style>
