<template>
  <div class="wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>

  <ModalsContainer />
</template>

<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal'
</script>

<style scoped lang="postcss">
.wrapper {
  @apply bg-[#202225] font-sans;
}
</style>
