<template>
  <div>
    <AppHeader class="wrapper" />
    <main class="wrapper">
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
.wrapper {
  @apply max-w-6xl m-auto;
}
</style>
