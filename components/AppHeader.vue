<template>
  <header class="header">
    <AppLogo :is-header="true" />

    <div class="header__right-content">
      <span class="header__phone-number">+7 (800) 505 22 55</span>
      <div class="header__cart-wrapper">
        <IconCart />
        <svg
          v-if="productsCount > 0"
          class="header__circle"
          viewBox="0 0 30 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50%" cy="50%" r="15" />
          <text x="15" y="20.5" text-anchor="middle" class="text">{{ productsCount }}</text>
        </svg>
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
.text {
  @apply fill-white;
}

.header {
  @apply m-auto px-7.5 flex items-center justify-between h-[var(--header-height)];

  &__cart-wrapper {
    @apply relative;
  }

  &__circle {
    @apply w-5 absolute -right-2 top-0 fill-yellow-500;
  }

  &__right-content {
    @apply flex items-center gap-12.5;
  }

  &__phone_number {
    @apply text-xl leading-30px font-medium;
  }
}
</style>
