<template>
  <AppModal :is-close-icon="true" :size="'xl'">
    <template #title>
      Корзина
    </template>
    <div class="cart">
      <div class="cart__products">
        <CartProduct v-for="item in cart" :key="item.product.id" :item="item" />
      </div>

      <div class="cart__total-price">
        <hr class="border-gray-800 mb-5">
        <div class="grid grid-cols-2">
          <span v-if="isDelivery">Доставка: <strong>100 ₽</strong></span>
          <span class="cart__text cart__text_right">Итого: <strong>{{ isDelivery ? Number(totalPrice) + 100 : totalPrice }} ₽</strong></span>
        </div>
      </div>

      <div class="cart__delivery-type">
        <AppButton
          class="cart__button cart__button_left"
          :class="{ cart__button_active: isDelivery }"
          @click="changeDeliveryType('delivery')"
        >
          Доставка
        </AppButton>

        <AppButton
          class="cart__button cart__button_right"
          :class="{ cart__button_active: !isDelivery }"
          @click="changeDeliveryType('pickup')"
        >
          Самовывоз
        </AppButton>
      </div>

      <form
        class="cart__form form"
        @submit.prevent="
          () => {
            createOrder()
            hideAll()
          }
        "
      >
        <div :class="{ form__div_full: !isDelivery }">
          <label for="tel" class="required">Контактный телефон</label>
          <br>
          <input
            id="tel"
            v-model.trim="fields.phone"
            placeholder="+79123456789"
            pattern="[+]{1}[7]{1}[0-9]{10}"
            required
            type="tel"
            name="tel"
            class="form__field"
          >
        </div>

        <div v-if="isDelivery">
          <label
            for="address"
            :class="{ required: isDelivery }"
          >Адрес</label>
          <br>
          <input
            id="address"
            v-model.trim="fields.address"
            placeholder="ул. Пушкина, д. 29, кв. 7"
            required
            type="text"
            name="address"
            class="form__field"
          >
        </div>

        <div :class="{ form__div_full: !isDelivery }">
          <label for="name" class="required">Имя</label>
          <br>
          <input
            id="name"
            v-model.trim="fields.name"
            placeholder="Иван"
            required
            type="text"
            name="name"
            class="form__field"
          >
        </div>

        <div
          class="form__buttons"
          :class="{ form__buttons_full: !isDelivery }"
        >
          <input
            type="button"
            value="Отмена"
            class="form__cancel-button"
            @click="hideAll"
          >
          <input type="submit" value="Оформить" class="form__submit-button">
        </div>
      </form>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
import { reactive, ref, computed, watch } from 'vue'
import AppButton from './AppButton.vue'
import AppModal from './AppModal.vue'
import CartProduct from './CartProduct.vue'
import { useCurrentCity } from '~/composables/use-city-api'
import { useCart } from '~/composables/use-cart'
import { useOrders } from '~/composables/use-orders'
import { useModal } from '~/composables/use-modal'
import { useSnackbar } from '~/composables/use-snackbar'

const { cart, totalPrice, clear: clearCart, productsCount } = useCart()

const deliveryType = ref('delivery')

const changeDeliveryType = (newDeliveryType: string) => {
  deliveryType.value = newDeliveryType
}

const isDelivery = computed(() => deliveryType.value === 'delivery')

const fields = reactive({
  phone: '+7',
  address: '',
  name: '',
})

const [city] = useCurrentCity()

const { create } = useOrders()

const { hideAll } = useModal()

const snackbar = useSnackbar()

const createOrder = async () => {
  try {
    if (!isDelivery.value) { fields.address = 'Самовывоз' }

    await create({
      ...fields,
      city: city.value.id,
      items: cart.value.map(item => ({
        __component: 'order-item.order-item',
        product: item.product.id,
        amount: item.amount,
      })),
    })

    snackbar.add({
      type: 'success',
      text: `Ваш заказ на сумму ${isDelivery.value ? Number(totalPrice.value) + 100 : totalPrice.value} ₽ принят в работу. Ожидайте звонка от оператора!`,
    })
  } catch {
    snackbar.add({
      type: 'error',
      text: 'Технические неполадки.',
    })
  } finally {
    clearCart()
  }
}

watch(productsCount, value => value === 0 && hideAll())
</script>

<style scoped lang="postcss">
.required:after {
  content: ' *'; // content-[' *'] not work
  @apply text-red-600;
}

.form {
  @apply grid grid-cols-2 gap-x-8 gap-y-3 items-end <md: grid-cols-1;

  &__div {
    &_full {
      @apply <md: col-span-2;
    }
  }

  &__buttons {
    @apply grid grid-cols-2 gap-x-10 <sm: flex flex-col-reverse gap-y-3;

    &_full {
      @apply col-span-2 mt-6;
    }
  }

  // styles for input buttons see in main.css
}

.cart {
  &__total-price {
    @apply mb-2 pt-4 px-5;
  }

  &__text {
    &_right {
      @apply text-right col-start-2;
    }
  }

  &__products {
    @apply grid gap-6 mb-5.5 max-h-[40vh] overflow-y-scroll px-5;
  }

  &__delivery-type {
    @apply grid grid-cols-2 col-span-2 my-4 rounded-lg border-gray-800 border-solid border-width-2;
  }

  &__button {
    @apply bg-transparent;

    &_active {
      @apply bg-yellow-500;
    }

    &_left {
      @apply rounded-r-none;
    }

    &_right {
      @apply rounded-l-none;
    }
  }
}

@media screen and (max-height: 769px) {
  .cart {
    &__products {
      @apply max-h-[25vh];
    }
  }
}

@media screen and (max-height: 700px) {
  .cart {
    &__products {
      @apply max-h-[20vh];
    }
  }
}
</style>
