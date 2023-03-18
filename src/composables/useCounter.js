import { ref } from "vue";

export default function useCounter(initialValue = 0) {
  const count = ref(initialValue);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function reset() {
    count.value = initialValue;
  }

  function setValue(value) {
    count.value = value;
  }

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
}
