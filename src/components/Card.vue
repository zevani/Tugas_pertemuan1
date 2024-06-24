<script setup>
const props = defineProps({
  title: String,
  customClass: String,
});
</script>
<template>
  <div class="card shadow bg-body rounded-4" :class="customClass">
    <div class="card-body">
      {{ title }}
      <slot></slot> <!-- Allows for content insertion between <card> tags -->
    </div>
  </div>
</template>
