<script setup>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";

const name = "Sy. Zevani Ananda Zellery";
const job = "Mahasiswi";
const image = "https://source.unsplash.com/1600x1500/?programming";


</script>

<template>
  <Hero :name="name" :job="job" :description="description" :image="image" />
  <About
  description="Perkenalkan nama saya Sy. Zevani Ananda Zellery , saya lahir 26 oktober 2005 , saya berasal dari kota pekanbaru. Saya melanjutkan studi S1(strata satu) di Universitas Islam Riau dan mengambil jurusan Teknik Informatika, kini telah memasuki semester 4."
  whatsApp="https://wa.me/85264200657"
  github="https://github.com/zevani"
  instagram="https://www.instagram.com/anandaazvn/#"
  />
</template>