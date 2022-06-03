<template>
  <Burger class="icon icon_burger" />
</template>

<script setup lang="ts">
import Burger from '~icons/majesticons/burger-line'

</script>

<style scoped lang="postcss">
.icon_burger {
  @apply w-16 h-16;

  & :deep(g) {
    @apply stroke-width-1;
  }
}
</style>
