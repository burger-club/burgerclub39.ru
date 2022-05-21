<template>
  <Burger class="icon icon_burger" />
</template>

<script setup lang="ts">
import Burger from '~icons/majesticons/burger-line'

</script>

<style lang="postcss">
.icon_burger {
  @apply w-16 h-16;

  & g {
    @apply stroke-width-1;
  }
}
</style>
