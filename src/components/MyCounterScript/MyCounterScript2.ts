import { defineComponent, computed, ref } from 'vue';
import { useCounter } from '../../composables/useCounter';

export default defineComponent({
  setup() {
    const { counter, squaredCounter } = useCounter();

    return {
      counter,
      squaredCounter,
    };
  },
});
