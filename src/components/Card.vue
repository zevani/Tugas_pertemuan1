<script setup>
const props = defineProps({
  title: String,
  customClass: String,
});
</script>

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
