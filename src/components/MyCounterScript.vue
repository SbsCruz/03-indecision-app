<template>
  <section>
    <h3>counter: {{ counter }}</h3>
    <h3>square: {{ squaredCounter }}</h3>

    <div>
      <button @click="counter--">-1</button>
      <button @click="counter++">+1</button>
    </div>
  </section>
  <hr />
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const { counter, squaredCounter } = useCounter();
</script>
