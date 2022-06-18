<template>
  <div ref="star" class="absolute bg-white rounded-full opacity-100 star" :style="style" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const style = ref({})
const randomY = ref()
const randomX = ref()
const randomRadius = computed(() => Math.round(Math.random() * Math.round(4)))
const randomDuration = computed(() => Math.round(Math.random() * Math.round(10)))

onMounted(() => {
  const { height } = document.documentElement.getBoundingClientRect()

  randomX.value = Math.random() * Math.floor(window.screen.width)
  randomY.value = Math.random() * Math.floor(height)
  style.value = {
    top: randomY.value + 'px',
    left: randomX.value + 'px',
    height: randomRadius.value + 'px',
    width: randomRadius.value + 'px',
    animationDuration: randomDuration.value + 's',
  }
})

</script>

<style lang="postcss" scoped>
/* Stars */
.star {
  animation-name: fade;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
