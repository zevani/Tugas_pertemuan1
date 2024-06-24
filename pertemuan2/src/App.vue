
<template>
  <div>
    <h1>Declarative Rendering</h1>
    <p>{{ namaVariabel2 }}</p>
    <p>{{ namaVariabel3 }}</p>
    <p>{{ variabelReactive }}</p>
    <p>{{ variabelReactive }}</p>

    <h1>Attribute Rendering</h1>
    <p v-bind:class="styleParagraf">Halo</p>
    <h3 v-bind:class="styleParagraf">Halo</h3>
    <h5 v-bind:class="styleParagraf">Halo</h5>

    <hr>
    <h1>Event Listener</h1>
    <p>{{ data }}</p>
    <button @click="increment">Tambah</button>
    <button @click="decrement">Kurang</button>
    
    <h1>From Binding</h1>
    <from action="">
      <input type="text" v-model="username"></from>
    <p>Hasil dai From: {{ username }}</p>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'

const username = ref("")

// const namavariabel = ref("hello vue")
// const namavariabel2 = ref(1)
// const namavariabel3 = ref([{
//   nama: "Zevani",
//   kelas:"Pratikum"
// }])

// const variabelReactive = reactive([{
//   nama: "PBK2",
//   kelas:"Pratikum",
//   kode: 9
// }])

</script>

<style scoped>
.paragraf{
  font-size: 25px;
  color: red;
}
</style>

