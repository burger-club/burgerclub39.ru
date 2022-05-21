<template>
  <section class="hero-section">
    <h1>Наше меню</h1>
    <p class="hero-section__subtitle">
      Выберите то, что нравится Вам!
    </p>
    <div class="hero-section__content">
      <AppCard v-for="(i, index) in data" v-bind="i" :key="index" />
    </div>
    <h1 />
  </section>
</template>

<script setup lang="ts">
import AppCard from './AppCard.vue'
import { CardProps } from '~/interfaces/card-props'

const data: CardProps[] = [
  {
    imageSrc: '../assets/images/burger.png',
    title: 'С мраморной говядиной',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо',
    price: 350,
  },
  {
    imageSrc: '../assets/images/burger2.png',
    title: 'Чизбургер',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо, соуса: ранч и кимчи, подаётся с картофелем и соусом на Ваш выбор',
    price: 160,
  },
  {
    imageSrc: '../assets/images/burger.png',
    title: 'С мраморной говядиной',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо',
    price: 350,
  },
  {
    imageSrc: '../assets/images/burger2.png',
    title: 'Чизбургер',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо, соуса: ранч и кимчи, подаётся с картофелем и соусом на Ваш выбор',
    price: 160,
  },
  {
    imageSrc: '../assets/images/burger.png',
    title: 'С мраморной говядиной',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо',
    price: 350,
  },
  {
    imageSrc: '../assets/images/burger2.png',
    title: 'Чизбургер',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо, соуса: ранч и кимчи, подаётся с картофелем и соусом на Ваш выбор',
    price: 160,
  },
  {
    imageSrc: '../assets/images/burger.png',
    title: 'С мраморной говядиной',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо',
    price: 350,
  },
  {
    imageSrc: '../assets/images/burger2.png',
    title: 'Чизбургер',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо, соуса: ранч и кимчи, подаётся с картофелем и соусом на Ваш выбор',
    price: 160,
  },
  {
    imageSrc: '../assets/images/burger.png',
    title: 'С мраморной говядиной',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо',
    price: 350,
  },
  {
    imageSrc: '../assets/images/burger2.png',
    title: 'Чизбургер',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо, соуса: ранч и кимчи, подаётся с картофелем и соусом на Ваш выбор',
    price: 160,
  },
  {
    imageSrc: '../assets/images/burger.png',
    title: 'С мраморной говядиной',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо',
    price: 350,
  },
  {
    imageSrc: '../assets/images/burger2.png',
    title: 'Чизбургер',
    description:
      'Булочка, говяжья котлета, салатный лист, маринованные огурцы, помидоры, плавленный сыр чеддер, перец халапеньо, соуса: ранч и кимчи, подаётся с картофелем и соусом на Ваш выбор',
    price: 160,
  },
]
</script>

<style scoped lang="postcss">
.hero-section {
  @apply px-3.5 pt-6.5 pb-20 m-auto flex flex-col items-center;

  &__subtitle {
    @apply mb-14 text-xl leading-30px font-medium text-gray-400;
  }

  &__content {
    @apply grid grid-cols-4 gap-x-8 gap-y-21.25 w-full justify-items-center;
  }
}
</style>
