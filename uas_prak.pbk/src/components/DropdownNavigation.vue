<!-- src/components/DropdownNavigation.vue -->
<template>
    <div>
      <label for="tugas">Pilih Tugas:</label>
      <select v-model="selectedTugas" @change="navigateToTugas">
        <option v-for="tugas in totalTugas" :key="tugas" :value="tugas">
          Tugas {{ tugas }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTugas: '',
        totalTugas: [1, 2, 3, 4, 5, 6] // Sesuaikan dengan jumlah tugas yang Anda miliki
      };
    },
    methods: {
      navigateToTugas() {
        this.$router.push(`/tugas${this.selectedTugas}`);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling for the component */
  </style>
  