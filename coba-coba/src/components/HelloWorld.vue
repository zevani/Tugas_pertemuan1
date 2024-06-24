<template>
  <div>
    <label for="selection">Pilih Opsi:</label>
    <select id="selection" v-model="selectedOption">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
    <p>Opsi terpilih: {{ selectedOption }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const options = ["Opsi 1", "Opsi 2", "Opsi 3"]
const selectedOption = ref(null)
</script>
