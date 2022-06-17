<template>
  <div class="logo">
    <IconBurger />
    <div class="logo__text">
      <span class="logo__name">BURGERTIME</span>

      <span v-if="isHeader" class="logo__city">
        {{ city ? city.attributes.name : 'Выберите город' }}
        <IconChevron class="cursor-pointer" @click="show" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ModalCity from './ModalCity.vue'
import IconBurger from './icons/IconBurger.vue'
import IconChevron from './icons/IconChevron.vue'
import { useCurrentCity } from '~/composables/use-city-api'
import { useModal } from '~/composables/use-modal'

const props = defineProps({
  isHeader: {
    type: Boolean,
    default: false,
  },
})

const [city] = useCurrentCity()
const { show } = useModal(ModalCity)

if (props.isHeader && !city.value) {
  show()
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
