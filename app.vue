<template>
  <div class="wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>

  <teleport to="body">
    <Vue3Snackbar bottom right :duration="750" style="z-index: 10000;" />
  </teleport>

  <ClientOnly>
    <ModalsContainer />
  </ClientOnly>
</template>

<script setup lang="ts">
import { Vue3Snackbar } from 'vue3-snackbar'
import { ModalsContainer } from 'vue-final-modal'
</script>

<style scoped lang="postcss">
.wrapper {
  @apply bg-[#202225] font-sans;
}
</style>
