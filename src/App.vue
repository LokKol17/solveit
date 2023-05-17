<template>
  <div class="columns">
    <SideBar />
    <FormHeader />
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from "@/components/SideBar.vue";
import FormHeader from "@/components/FormHeader.vue";

export default defineComponent({
  name: 'App',
  components: {FormHeader, SideBar},

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


</style>