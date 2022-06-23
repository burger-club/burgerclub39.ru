<template>
  <AppModal :click-to-close="!!city" :size="'sm'">
    <template #title>
      Выберите ваш город
    </template>

    <form
      class="form"
      @submit.prevent="() => {
        setCurrentCity(selectCity);
        hideAll()
      }"
    >
      <select
        v-model="selectCity"
        required
        class="form__field"
        title="Города"
        name="cities"
      >
        <option disabled hidden value="">
          Выберите город
        </option>
        <option v-for="c in cities" :key="c.id" :value="c">
          {{ c.attributes.name }}
        </option>
      </select>

      <input type="submit" value="Да, правильно!">
    </form>
  </AppModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppModal from './AppModal.vue'
import { useCities, useCurrentCity } from '~/composables/use-city-api'
import { useModal } from '~/composables/use-modal'

const cities = await useCities()
const [city, setCurrentCity] = useCurrentCity()
const selectCity = ref(city.value ?? '')
const { hideAll } = useModal()
</script>

<style scoped lang="postcss">
.form {
  @apply flex flex-col gap-4;
}
</style>
