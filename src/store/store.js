import { createStore } from "vuex";
import useCounter from '../composables/useCounter'

const { count, increment, decrement, reset, setValue } = useCounter();

export default createStore({
  state: {
    count,
  },
  mutations: {
    increment(state) {
      increment();
      state.count = count.value;
    },
    decrement(state) {
      decrement();
      state.count = count.value;
    },
    reset(state) {
      reset();
      state.count = count.value;
    },
    setValue(state, value) {
      setValue(value);
      state.count = count.value;
    },
  },
});
