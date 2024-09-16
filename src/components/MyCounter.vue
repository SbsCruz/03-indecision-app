<template>
  <section>
    <h4>{{ text }}</h4>
    <h3>counter: {{ counter }}</h3>
    <h3>square: {{ squaredCounter }}</h3>

    <div>
      <button @click="decrement">-1</button>
      <!-- <button @click="counter--">-1</button> -->

      <button @click="increment">+1</button>
      <!-- <button @click="counter++">+1</button> -->
    </div>
  </section>
  <hr />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// PROPS EN TS CON INTERFACE
interface Props {
  value?: number;
  text?: string;
}
const props = defineProps<Props>();

// PROPS EN TS, ya no hace definir que es requerido
// const props = defineProps<{
//   value: number;
// }>();

// DEFINIR PROPS COMO EN JS
// const props = defineProps({
//   value: { type: Number, required: true },
// });

const counter = ref(props.value ?? 5);
const squaredCounter = computed(() => counter.value * counter.value);

// tarea
const increment = () => {
  counter.value++;
};
const decrement = () => {
  counter.value--;
};
</script>

<!-- scoped para que no afecte a todo el documento -->
<!-- <style scoped>
* {
  color: #21232a;
}
</style> -->
