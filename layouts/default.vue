<template>
  <div id="layout" class="relative">
    <AppHeader class="wrapper mx-auto z-100" />

    <main class="wrapper m-auto z-100">
      <slot />
    </main>

    <AppFooter class="z-100" />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<style scoped lang="postcss">
#layout {
  @apply flex flex-col min-h-[100vh]
}

.wrapper {
  @apply max-w-6xl <xl: max-w-4xl;
}
</style>
