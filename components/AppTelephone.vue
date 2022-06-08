<template>
  <a :href="`tel:${hrefTelephone}`" class="telephone">{{ telephone }}</a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '~/store'

const store = useCartStore()

const telephone = computed(() => store.getPhone)
const hrefTelephone = telephone?.value?.replace(/\(|\)|-|\s/gm, '')
</script>

<style scoped lang="postcss">
.telephone {
  @apply text-xl leading-30px font-medium;
}
</style>
