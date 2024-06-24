<script setup>
const props = defineProps({
  title: String,
  customClass: String,
});
</script>
<<<<<<< HEAD
<template>
  <div class="card shadow bg-body rounded-4" :class="customClass">
    <div class="card-body">
      {{ title }}
      <slot></slot> <!-- Allows for content insertion between <card> tags -->
    </div>
  </div>
</template>
=======

<template>
  <div class="card shadow bg-body rounded-4" :class="customClass">
    <div class="card-body"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border: 0px;
}
</style>
>>>>>>> ca295a4c9d151b2e76c0257354f0d18f518aacbf
