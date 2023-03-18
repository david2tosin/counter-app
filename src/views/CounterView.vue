<template>
  <div class="counter">
    <h1>Simple Counter</h1>
    <p>{{ count }}</p>
    <div class="buttons green">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="reset">Reset</button>
      <input type="number" v-model="newValue" />
      <button @click="setValue(newValue)">Set Value</button>
    </div>
    <nav>
      <router-link to="/" class="button">Back to Home</router-link>
    </nav>
  </div>
</template>

<script>
import useCounter from "../composables/useCounter.js";
import { ref } from "vue";
export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();
    const newValue = ref(0);
    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
      newValue,
    };
  },
};
</script>

<style>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-size: 1.5rem;
}

.buttons {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #2c3e50;
  color: hsla(160, 100%, 37%, 1);
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #4d5965;
  cursor: pointer;
}

.back-link {
  margin-top: 2rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #2c3e50;
}

input {
  font-size: 1rem;
  padding: 0.2rem;
  margin: 0rem;
  border-radius: 0.5rem;
  text-align: center;
}

nav {
  margin-top: 2em;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
