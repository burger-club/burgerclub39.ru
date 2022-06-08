<template>
  <button class="app-button" type="button">
    <slot />
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
.app-button {
  @apply px-3 py-11.5px bg-yellow-500 rounded-md text-white text-sm font-medium; // TODO: shadow

  &:hover {
    @apply bg-yellow-400;
  }
}
</style>
