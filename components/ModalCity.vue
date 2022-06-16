<template>
  <AppModal :size="'sm'">
    <template #title>
      Выберите ваш город
    </template>

    <form class="form" @submit.prevent="$emit('choseCity', selected, cities)">
      <select v-model="selected" required class="form__field" title="Города" name="cities">
        <option v-for="city in cities" :key="city.id" :value="city.attributes.name">
          {{ city.attributes.name }}
        </option>
      </select>

      <input type="submit" value="Да, правильно!">
    </form>
  </AppModal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppModal from './AppModal.vue'
import { useCartStore } from '~/store'

defineEmits(['choseCity'])

const store = useCartStore()
store.downloadCities()

const cities = computed(() => store.getCities)
const selected = computed(() => cities.value[0]?.attributes.name)
// TODO: типизировать
</script>

<style scoped lang="postcss">
.form {
  @apply flex flex-col gap-4;
}
</style>
