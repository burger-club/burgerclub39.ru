<template>
  <div class="app-card">
    <img class="app-card__image" :src="imageUrl" :alt="imageAltText">

    <div class="app-card__group">
      <div class="app-card__info">
        <h2>{{ name }}</h2>

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
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRaw } from 'vue'
import AppButton from './AppButton.vue'
import { useCartStore } from '~/store'
import { defaultText, useButton } from '~/composables/text-change'
import { Image } from '~/interfaces/image'

const productProps = defineProps({
  name: {
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
  image: {
    type: Object as PropType<Image>,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})

const textOnButton = ref(defaultText)

const store = useCartStore()

const { name, price, image, id } = toRaw(productProps)
const imageUrl = useStrapiUrl().replace('/api', '') + image.data.attributes.url
const imageAltText = image.data.attributes.url

function handleClick () {
  store.addProduct({ name, price, imageUrl, imageAltText, id, amount: 1 })
  useButton(textOnButton)
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
    @apply grid grid-cols-3 gap-x-2 items-center justify-between xl:gap-x-8;
  }

  &__button {
    @apply animate-bounce transition-all col-span-2 h-full
    <sm:order-1;

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
    @apply text-2xl font-medium text-right <sm:text-left;
  }
}

@media screen and (max-width: 418px) {
  .app-card {
    &__group {
      @apply gap-y-2;
    }

    &__purchase {
      @apply flex gap-0 flex-col items-stretch;
    }

    &__price {
      @apply text-center;
    }
  }
}
</style>
