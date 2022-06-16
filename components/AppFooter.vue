<template>
  <footer class="footer">
    <AppLogo />
    <AppTelephone class="footer__telephone" />
    <hr class="footer__hr">
    <p class="footer__info">
      ИП Семионова Ю.Д. ИНН: 390203244897 ОГРНИП: 317392600026148
      <br>
      <span class="underline">Почта: kramnoi@inbox.ru</span>
      <!-- TODO: кликабельное -->
    </p>
  </footer>
</template>

<script setup lang="ts">
import AppLogo from './AppLogo.vue'
import AppTelephone from './AppTelephone.vue'
</script>

<style scoped lang="postcss">
.footer {
  @apply pt-13.5 pb-6.5 flex flex-col items-center;

  &__telephone {
    @apply <sm:mt-6 sm:hidden;
  }

  &__hr {
    @apply mt-10 mb-7 w-full border-gray-800;
  }

  &__info {
    @apply text-center;
  }
}
</style>
