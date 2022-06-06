<template>
  <AppModal :is-close-icon="true">
    <div v-if="products.length" class="cart">
      <h2 class="cart__title">
        Корзина
      </h2>

      <div class="cart__products">
        <CartProduct v-for="product in products" :key="product.title" v-bind="product" />
      </div>

      <div class="cart__total-price">
        <span>Итого: <strong>{{ totalPrice }} ₽</strong></span>
      </div>

      <form class="cart__form form" @submit.prevent="sendOrder">
        <div>
          <label for="tel" class="required">Контактный телефон</label>
          <br>
          <input id="tel" type="tel" name="tel" class="form__field">
        </div>

        <div>
          <label for="address" class="required">Адрес</label>
          <br>
          <input id="address" type="text" name="address" class="form__field">
        </div>

        <div>
          <label for="name" class="required">ФИО покупателя</label>
          <br>
          <input id="name" type="text" name="name" class="form__field">
        </div>

        <div class="form__buttons">
          <input type="reset" value="Отмена" class="form__cancel-button" @click="cancelOrder">
          <input type="submit" value="Оформить" class="form__submit-button">
        </div>
      </form>
    </div>

    <span v-else class="text-center">
      Пока пусто
    </span>
  </AppModal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppModal from './AppModal.vue'
import CartProduct from './CartProduct.vue'
import { useCartStore } from '~/store'

const store = useCartStore()

const totalPrice = computed(() => store.getTotalPrice)

const products = store.getCart
</script>

<style scoped lang="postcss">
.required:after {
  content: ' *'; // content-[' *'] not work
  @apply text-red-600;
}

.form {
  @apply grid grid-cols-2 gap-x-8 gap-y-3 items-end;

  &__buttons {
    @apply grid grid-cols-2 gap-10;
  }

  // styles for input buttons see in main.css
}

.cart {
  &__title {
    @apply mb-3 text-center;
  }

  &__total-price {
    @apply text-right mb-2 pt-4 border-t border-solid border-gray-800;
  }

  &__products {
    @apply grid gap-6 mb-5.5 max-h-[40vh] overflow-x-auto;

    &::-webkit-scrollbar {
      @apply w-3.5;

      &-track {
        @apply bg-[#25272B] rounded-md;
      }

      &-thumb {
        @apply bg-yellow-500 rounded-md;

        &:hover {
          @apply bg-yellow-600;
        }
      }
    }
  }
}
</style>
