<template>
  <div class="wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <teleport to="body">
      <ClientOnly>
        <Vue3Snackbar bottom right :duration="750" style="z-index: 10000;" />

        <ModalsContainer />
      </ClientOnly>
    </teleport>
  </div>
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
