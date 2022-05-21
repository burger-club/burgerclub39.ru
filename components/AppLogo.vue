<template>
  <div class="logo">
    <IconBurger />
    <div class="logo__text">
      <span class="logo__name"> BURGERCLUB </span>
      <span v-if="isHeader" class="logo__city">
        Советск
        <IconChevron />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconBurger from './icons/IconBurger.vue'
import IconChevron from './icons/IconChevron.vue'

defineProps({
  isHeader: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="postcss">
.logo {
  @apply flex items-center gap-4;

  &__text {
    @apply flex flex-col;
  }

  &__name {
    @apply text-xl leading-30px font-bold;
  }

  &__city {
    @apply flex items-center gap-2;
  }
}
</style>
