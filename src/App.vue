<template>
  <h1 class="text-3xl font-bold underline">My First Vue App</h1>
  <hr />

  <!-- <MyCounter v-bind:value="4" /> -->
  <MyCounter :value="4" />
  <MyCounterScript :value="4" text="Hola Mundo" />
  <MyCounterScript2 :value="1" text="Hola Mundo2" />
</template>

<script setup lang="ts">
// se debe importar para usar el componente
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript/MyCounterScript2.vue';
import MyCounterScript2 from './components/MyCounterScript.vue';
</script>
