<template>
  <a :href="`tel:${hrefTelephone}`" class="telephone">{{ telephone }}</a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCurrentCity } from '~/composables/use-city-api'

const [city] = useCurrentCity()
const telephone = computed(() => city.value?.attributes.phone)
const hrefTelephone = computed(() => telephone?.value?.replace(/\(|\)|-|\s/gm, ''))
</script>

<style scoped lang="postcss">
.telephone {
  @apply text-xl leading-30px font-medium;
}
</style>
