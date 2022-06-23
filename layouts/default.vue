<template>
  <div id="layout" class="relative">
    <div :style="{ 'display': isLoading ? 'grid' : 'none'}" class="loader">
      <IconSpinner />
    </div>

    <div class="min-h-[100vh] content-between" :style="{ 'display': isLoading ? 'none': 'grid'}">
      <AppHeader class="wrapper mx-auto z-100" />

      <main class="wrapper m-auto z-100">
        <slot />
      </main>

      <AppFooter class="z-100" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import IconSpinner from '~/components/icons/IconSpinner.vue'

const isLoading = ref(true)

onMounted(() => {
  isLoading.value = false
})
</script>

<style scoped lang="postcss">
#layout {
  @apply flex flex-col min-h-[100vh]
}

.loader {
  @apply h-[100vh] bg-[#202225] w-full flex items-center justify-center ;
}

.wrapper {
  @apply max-w-6xl <xl: max-w-4xl;
}
</style>
