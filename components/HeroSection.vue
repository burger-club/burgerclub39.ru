<template>
  <IconSpinner v-if="pending" />

  <section v-else class="hero-section">
    <h1>Наше меню</h1>

    <p class="hero-section__subtitle">
      Выберите то, что нравится Вам!
    </p>

    <div class="hero-section__content">
      <AppCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import AppCard from './AppCard.vue'
import IconSpinner from './icons/IconSpinner.vue'
import { useProducts } from '~/composables/use-products'

const { pending, products } = useProducts()
</script>

<style scoped lang="postcss">
.hero-section {
  @apply px-3.5 pt-6.5 pb-20 m-auto flex flex-col items-center;

  &__subtitle {
    @apply mb-14 text-xl leading-30px font-medium text-gray-400 text-center;
  }

  &__content {
    @apply grid grid-cols-12 gap-x-8 gap-y-21.25 w-full justify-items-center
    <sm:gap-y-5 <sm:gap-x-0;
  }
}
</style>
