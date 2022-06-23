<template>
  <header class="header">
    <AppLogo :is-header="true" />

    <div class="header__right-content">
      <AppTelephone class="header__telephone" />

      <div class="header__cart-wrapper" @click="productsCount > 0 && show()">
        <IconCart :class="[{ 'cursor-pointer': productsCount > 0, 'header__icon-cart': productsCount <= 0 }]" />
        <div v-if="productsCount" class="header__circle">
          {{ productsCount }}
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppTelephone from './AppTelephone.vue'
import IconCart from './icons/IconCart.vue'
import ModalCart from './ModalCart.vue'
import AppLogo from './AppLogo.vue'
import { useModal } from '~/composables/use-modal'
import { useCart } from '~/composables/use-cart'

const { productsCount } = useCart()
const { show } = useModal(ModalCart)
</script>

<style scoped lang="postcss">
.header {
  @apply px-7.5 flex items-center justify-between min-h-[var(--header-height)] pt-2 w-full;

  &__cart-wrapper {
    @apply relative;
  }

  &__icon-cart {
    @apply filter brightness-50;
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
