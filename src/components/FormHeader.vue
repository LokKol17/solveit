<template>
  <section class="header">
    <input type="text" class="header__input" placeholder="Ex: X2 - 4X + 4 = 0">
    <button class="header__button">Calcular</button>
  </section>
</template>

<script>
export default {
  name: "FormHeader"
};
</script>

<style lang="scss">
  .header {
    background: $blackinBlue;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &__input {
      width: 70%;
      height: 40px;
      border-radius: 4px;
      border: 1px solid $blackinBlue;
      padding: 0 10px;
      font-size: 16px;
      color: black;
      outline: none;

      &::placeholder {
        color: $blackinBlue;
      }
      &:focus {
        border: 2px solid $calamiBlue;
        outline: 1px solid $mint;
      }
    }

    &__button {
      width: 20%;
      height: 60px;
      border-radius: 4px;
      border: 1px solid $blackinBlue;
      background: $calamiBlue;
      padding: 0 10px;
      font-size: 1.3rem;
      font-weight: bold;
      color: white;
      outline: none;
      transition: all 0.2s ease-in-out;
      letter-spacing: 2px;

      &::placeholder {
        color: $blackinBlue;
      }
      &:focus, &:hover {
        border: 2px solid $calamiBlue;
        outline: 1px solid $mint;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
        letter-spacing: 3px;
      }
      &:active {
        transform: scale(0.98);
        letter-spacing: 1px
      }
    }
  }
</style>