<template>
  <div class="animate__animated animate__fadeIn app-card">
    <img class="app-card__image" :src="source" :alt="altText">

    <div class="app-card__group">
      <div class="app-card__info">
        <h2>{{ product.attributes.name }}</h2>

        <p class="app-card__description">
          {{ product.attributes.description }}
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

        <span class="app-card__price">{{ product.attributes.price }} ₽</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRaw } from 'vue'
import AppButton from './AppButton.vue'
import { defaultText, useButton } from '~/composables/text-change'
import { Product } from '~/interfaces/product'
import { useCart } from '~/composables/use-cart'
import { useImageUtils } from '~/composables/use-image-utils'
import { useSnackbar } from '~/composables/use-snackbar'

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
})

const textOnButton = ref(defaultText)

const { product } = toRaw(props)

const { addProduct } = useCart()

const { properties } = useImageUtils()
const { source, altText } = properties(product.attributes.image)

const snackbar = useSnackbar()

function handleClick () {
  addProduct(product)

  useButton(textOnButton)

  snackbar.add({
    type: 'success',
    text: `${product.attributes.name} успешно добавлен в корзину!`,
  })
}
</script>

<style scoped lang="postcss">
.app-card {
  @apply flex flex-col gap-4 col-span-12 <sm:flex-row <sm:items-center sm:col-span-6 md:col-span-4 xl:col-span-3;

  &+& {
    @apply <sm:pt-5 <sm:border-t <sm:border-solid <sm:border-gray-800;
  }

  &__image {
    @apply rounded-4px <sm:max-w-[120px];
  }

  &__group {
    @apply flex h-full flex-col justify-between gap-6;
  }

  &__info {
    @apply flex flex-col gap-2;
  }

  &__description {
    @apply text-xs leading-18px text-gray-300;
  }

  &__purchase {
    @apply grid grid-cols-3 gap-x-2 items-center justify-between xl:gap-x-0;
  }

  &__button {
    @apply animate-bounce transition-all col-span-2 h-full min-w-[156.8px];

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
    @apply text-2xl font-medium text-right <xl:text-xl;
  }
}

@media screen and (max-width: 418px) {
  .app-card {
    &__group {
      @apply gap-y-2;
    }

    &__purchase {
      @apply grid grid-cols-1 grid-rows-2 gap-0 items-stretch;
    }

    &__price {
      @apply text-center;
    }
  }
}
</style>
