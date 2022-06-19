<template>
  <footer>
    <IconWave />

    <div class="footer__inner">
      <AppLogo />
      <hr class="footer__hr">
      <p class="footer__info">
        ИП Семионова Ю.Д. ИНН: 390203244897 ОГРНИП: 317392600026148
        <br>
        <a href="mailto:kramnoi@inbox.ru" class="underline">Свяжитесь с нами!</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppLogo from './AppLogo.vue'
import IconWave from '~/components/icons/IconWave.vue'
</script>

<style scoped lang="postcss">
.footer {
  &__inner {
    @apply pb-6.5 flex flex-col items-center bg-[#25272B];
  }

  &__hr {
    @apply mt-10 mb-7 w-full border-gray-800;
  }

  &__info {
    @apply text-center;
  }
}
</style>
