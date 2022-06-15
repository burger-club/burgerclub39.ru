<template>
  <div class="layout">
    <AppHeader class="wrapper mx-auto" />
    <main class="wrapper m-auto">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<style scoped lang="postcss">
.layout {
  @apply flex flex-col min-h-[100vh]
}

.wrapper {
  @apply max-w-6xl;
}
</style>

<!-- FIXME: ref replace to useState -->
