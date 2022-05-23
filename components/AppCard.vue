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
      <AppButton class="app-card__button" @click="handleClick">
        <Transition name="app-card__button-text" mode="out-in">
          <div :key="textOnButton">
            {{ textOnButton }}
          </div>
        </Transition>
      </AppButton>
      <span class="app-card__price">{{ price }} ₽</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue'
import { CardProps } from '~/interfaces/card-props'
import { useCartStore } from '~/store'
import { defaultText, useButton } from '~/composables/text-change'

const productProps: CardProps = defineProps({
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

const textOnButton = ref(defaultText)

const store = useCartStore()
const product = toRaw(productProps)

function handleClick () {
  store.addProduct(product)
  useButton(textOnButton)
}
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

  &__button {
    @apply min-w-35.5 animate-bounce transition-all;

    &-text {

      &-enter-active,
      &-leave-active {
        @apply transition-opacity duration-200;
      }

      &-enter-from,
      &-leave-to {
        @apply opacity-0;
      }
    }
  }

  &__price {
    @apply text-2xl font-medium;
  }
}
</style>
