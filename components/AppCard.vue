<template>
  <div class="app-card">
    <img class="app-card__image" :src="imageSrc" alt="burger image">

    <div class="app-card__info">
      <h2>{{ title }}</h2>
      <p class="app-card__description">
        {{ description }}
      </p>
    </div>

    <div class="app-card__purchase">
      <AppButton>Добавить в корзину</AppButton>
      <span class="app-card__price">{{ price }} ₽</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped lang="postcss">
.app-card {
  @apply max-w-65 flex flex-col gap-4;

  &__image {
    @apply max-h-55 rounded-4px;
  }

  &__info {
    @apply min-h-37 flex flex-col gap-2;
  }

  &__description {
    @apply text-xs leading-18px text-gray-300;
  }

  &__purchase {
    @apply flex justify-between items-center;
  }

  &__price {
    @apply text-2xl font-medium;
  }
}
</style>
