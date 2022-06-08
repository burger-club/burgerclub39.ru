<template>
  <div class="logo">
    <IconBurger />
    <div class="logo__text">
      <span class="logo__name">BURGERTIME</span>

      <span v-if="isHeader" class="logo__city">
        {{ cityName }}
        <IconChevron class="cursor-pointer" @click="showModalCity" />

        <ModalCity v-model="isShowModal" @chose-city="choseCity" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ModalCity from './ModalCity.vue'
import IconBurger from './icons/IconBurger.vue'
import IconChevron from './icons/IconChevron.vue'
import { City } from '~/interfaces/city'
import { useCartStore } from '~/store'

defineProps({
  isHeader: {
    type: Boolean,
    default: false,
  },
})

const store = useCartStore()

const isShowModal = ref(true)

function showModalCity () {
  isShowModal.value = !isShowModal.value
}

const cityName = ref('')
cityName.value = localStorage.getItem('city') ? JSON.parse(localStorage.getItem('city') || '{}').attributes.name : '32'

function choseCity (name: string, cities: City[]) {
  const city = cities.find((city: City) => city.attributes.name === name)

  if (city) {
    localStorage.setItem('city', JSON.stringify(city))
    store.changeCity(city)
  }

  cityName.value = name
  showModalCity()
}
</script>

<style scoped lang="postcss">
.logo {
  @apply flex items-center gap-4;

  &__text {
    @apply flex flex-col;
  }

  &__name {
    @apply text-xl leading-30px font-bold;
  }

  &__city {
    @apply flex items-center gap-2;
  }
}
</style>
