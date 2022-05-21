<template>
  <IconChevron class="icon icon_chevron" />
</template>

<script setup lang="ts">
import IconChevron from '~icons/akar-icons/chevron-down'
</script>

<style lang="postcss">
.icon_chevron {
  @apply w-4 h-4 filter-none;

  & path {
    @apply stroke-width-3;
  }
}
</style>
