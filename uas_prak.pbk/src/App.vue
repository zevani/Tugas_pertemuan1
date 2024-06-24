<template>
  <div id="app">
    <div>
      <button
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        :class="{ 'active': selectedOption === option }"
      >
        {{ option }}
      </button>
    </div>
    <p>Selected Option: {{ selectedOption }}</p>
    <component :is="currentComponent"></component>
    <div id="myElement" class="some-class"></div> <!-- Ensure this element exists -->
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';

// Import your components with correct paths
import WeatherPage from './components/WeatherPage.vue';
import MainLayout from './layout/MainLayout.vue'; 
import DropdownNavigation from './components/DropdownNavigation.vue';

const options = ["WEATHER", "DAFTAR TUGAS"];
const selectedOption = ref("WEATHER");

const currentComponent = computed(() => {
  if (selectedOption.value === "WEATHER") {
    return WeatherPage;
  } else if (selectedOption.value === "DAFTAR TUGAS") {
    return MainLayout; // Ensure MainLayout is correctly imported and available
  }
  return null;
});

const selectOption = (option) => {
  selectedOption.value = option;
};

// Ensure DOM manipulation happens after the component is mounted
onMounted(() => {
  const element = document.getElementById('myElement');
  if (element) {
    element.classList.add('new-class');
  } else {
    console.error('Element not found');
  }
});
</script>
<style scoped>
/* Scoped styles for the component */
div {
  font-family: Arial, sans-serif;
  margin: 20px;
}

button {
  padding: 10px 15px;
  margin-right: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f8f9fa;
}

button.active {
  background-color: #7900FF;
  color: #0c0c0c;
}

p {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}

#myElement {
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: 20px;
  background-color: #f8f9fa;
}

/* Class added by JavaScript */
.new-class {
  background-color: #FFDD00;
  color: #000;
}
</style>