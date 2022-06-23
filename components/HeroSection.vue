<template>
  <div>
    <section class="hero-section">
      <h1>Наше меню</h1>

      <p class="hero-section__subtitle">
        Выберите то, что нравится Вам!
      </p>

      <div class="hero-section__content">
        <AppCard v-for="(product, i) in products" :key="product.id" :product="product" :style="{ 'animation-delay': `${(~~(i / 4) * 250)}ms`}" />
      </div>
    </section>

    <teleport v-if="isMounted && products?.length" to="#layout">
      <div class="absolute left-0 w-full h-full overflow-hidden -top-24 z-0">
        <Star v-for="star in products.length * 10" :key="star" />
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppCard from './AppCard.vue'
import Star from '~/components/atoms/Star.vue'
import { useProducts } from '~/composables/use-products'

const { products } = await useProducts()
const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped lang="postcss">

.hero-section {
  @apply px-3.5 pt-6.5 pb-40 m-auto flex flex-col items-center;

  &__subtitle {
    @apply mb-14 text-xl leading-30px font-medium text-gray-400 text-center;
  }

  &__content {
    @apply grid grid-cols-12 gap-x-8 gap-y-21.25 w-full justify-items-stretch
    <sm:gap-y-5 <sm:gap-x-0;
  }
}
</style>
