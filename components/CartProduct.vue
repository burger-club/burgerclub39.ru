<template>
  <div class="product">
    <div class="product__left-content">
      <img class="product__image" :src="source" :alt="altText">

      <div>
        <h3 class="product__product-name">
          {{ item.product.attributes.name }}
        </h3>

        <h4 class="product__product-price">
          Стоимость: <strong>{{ item.product.attributes.price }} ₽</strong>
        </h4>
      </div>
    </div>

    <div class="product__amount">
      <IconPlus class="cursor-pointer" @click="addProduct(item.product)" />
      <b>{{ item.amount }}</b>
      <IconMinus
        class="cursor-pointer"
        @click="removeProduct(item.product)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRaw } from 'vue'
import IconPlus from './icons/IconPlus.vue'
import IconMinus from './icons/IconMinus.vue'
import { useCart } from '~/composables/use-cart'
import { CartItem } from '~/interfaces/cart-item'
import { useImageUtils } from '~/composables/use-image-utils'

const props = defineProps({
  item: {
    type: Object as PropType<CartItem>,
    required: true,
  },
})

const { item } = toRaw(props)

const { addProduct, removeProduct } = useCart()

const { properties } = useImageUtils()
const { source, altText } = properties(item.product.attributes.image)

</script>

<style scoped lang="postcss">
.product {
  @apply flex items-center justify-between;

  &__image {
    @apply w-16 h-16 rounded-1
    <sm:hidden;
  }

  &__left-content {
    @apply flex items-center gap-4;
  }

  &__amount {
    @apply grid grid-cols-[1fr,2fr,1fr] justify-items-center items-center;
  }
}
</style>
