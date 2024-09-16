<template>
  <section>
    <h3>counter: {{ counter }}</h3>
    <h3>square: {{ squaredCounter }}</h3>

    <div>
      <button class="btn" @click="counter--">-1</button>
      <button class="btn" @click="counter++">+1</button>
    </div>
  </section>
  <hr />
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>

<style scoped>
.btn {
  @apply p-5 bg-blue-800 hover:bg-blue-300 rounded m-3;
}
</style>
