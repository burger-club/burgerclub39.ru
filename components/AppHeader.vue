<template>
  <header class="header">
    <AppLogo :is-header="true" />

    <div class="header__right-content">
      <span class="header__phone-number">+7 (800) 505 22 55</span>
      <IconCart />
    </div>
  </header>
</template>

<script setup lang="ts">
import IconCart from './icons/IconCart.vue'
import AppLogo from './AppLogo.vue'
</script>

<style scoped lang="postcss">
.header {
  @apply m-auto px-7.5 flex items-center justify-between h-[var(--header-height)];

  &__right-content {
    @apply flex items-center gap-12.5;
  }

  &__phone_number {
    @apply text-xl leading-30px font-medium;
  }
}
</style>
