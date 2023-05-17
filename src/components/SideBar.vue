<template>
  <section class="barra-lateral">
    <img class="barra-lateral__logo" src="#" alt="logo">
    <div class="barra-lateral__divider"></div>
    <ul class="barra-lateral__list">
      <li class="barra-lateral__list__item">Equação do 2° Grau</li>
      <li class="barra-lateral__list__item">Equação do 1° Grau</li>
    </ul>
  </section>
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar"
});
</script>

<style lang="scss" scoped>

  $defaultWidth: 300px;

  .barra-lateral {
    background: $purpledBlue;
    width: 400px;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 0.7rem;
    box-sizing: border-box;

    &__logo {
      width: $defaultWidth;
      height: 300px;
      background: $mint;
    }

    &__divider {
      width: calc($defaultWidth + 20px);
      height: 1px;
      background: #fff;
      margin: 2rem 0 1rem 0;
    }
    &__list {
      width: $defaultWidth;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;

      &__item {
        width: 100%;
        height: auto;
        color: #fff;
        font-size: 1.3rem;
        margin: 1rem 0;
        list-style: none;
        text-align: start;
        letter-spacing: 4px;
      }
    }
  }
</style>