<template>
  <header class="header">
    <AppLogo :is-header="true" />

    <div class="header__right-content">
      <span class="header__phone-number">+7 (800) 505 22 55</span>
      <div class="header__cart-wrapper">
        <IconCart />
        <div v-if="productsCount" class="header__circle">
          {{ productsCount }}
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import IconCart from './icons/IconCart.vue'
import AppLogo from './AppLogo.vue'
import { useCartStore } from '~/store'

const cartStore = useCartStore()
const productsCount = computed(() => cartStore.getProductsCount)

</script>

<style scoped lang="postcss">
.header {
  @apply m-auto px-7.5 flex items-center justify-between h-[var(--header-height)];

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

  &__phone_number {
    @apply text-xl leading-30px font-medium;
  }
}
</style>
