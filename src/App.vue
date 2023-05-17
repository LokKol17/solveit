<template>
  <div class="columns">
    <SideBar />
    <div class="column">
      <FormHeader @equationString="calcular" />
      <h1> {{ result }}</h1>
    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from "@/components/SideBar.vue";
import FormHeader from "@/components/FormHeader.vue";
import QuadraticEquation from "@/equations/quadraticEquation/QuadraticEquation";

export default defineComponent({
  name: 'App',
  components: {FormHeader, SideBar},
  data () {
    return {
      result: "0"
    }
  },
  methods: {
    calcular (equation: string) {
      this.result = String(new QuadraticEquation(equation).execute());
    }
  }
});
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: $mainFont;
  }

  .columns {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
  }

  .column {
    width: 100%;
  }


</style>