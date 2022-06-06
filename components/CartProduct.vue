<template>
  <div class="product">
    <div class="product__left-content">
      <img class="product__image" :src="product.imageSrc">

      <div>
        <h3 class="product__product-name">
          {{ product.title }}
        </h3>

        <h4 class="product__product-price">
          Стоимость: <strong>{{ product.price }} ₽</strong>
        </h4>
      </div>
    </div>

    <div class="product__amount">
      <IconPlus class="cursor-pointer" @click="addProduct" />
      <b>{{ product.amount }}</b>
      <IconMinus class="cursor-pointer" @click="decrementAmount" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRaw } from 'vue'
import IconPlus from './icons/IconPlus.vue'
import IconMinus from './icons/IconMinus.vue'
import { useCartStore } from '~/store'

const cartProductProps = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
})

const store = useCartStore()

const product = toRaw(cartProductProps)

function addProduct () { store.addProduct(product) }
function decrementAmount () { store.decrementAmount(product) }

</script>

<style scoped lang="postcss">
.product {
  @apply flex items-center justify-between;

  &__image {
    @apply w-16 h-16 rounded-1;
  }

  &__left-content {
    @apply flex items-center gap-4;
  }

  &__amount {
    @apply grid grid-cols-[1fr,2fr,1fr] justify-items-center;
  }
}
</style>
