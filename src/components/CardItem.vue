<script setup>
const props = defineProps({
  year: Number,
  job: String,
  location: String,
  description: String,
  yearColor: {
    type: String,
    default: 'blue' // Set default value here
  }
});
</script>


<template>
  <div class="row px-3 py-2">
    <div class="col-md-4 p-4">
      <p id="year" :style="{ color: props.yearColor ?? 'blue' }">
        {{ props.year }}
      </p>
      <p id="job">{{ props.job }}</p>
      <p id="location" class="text-secondary">
        <i>{{ props.location }}</i>
      </p>
    </div>
    <div class="col-md-8 d-flex" id="description">
      <p class="align-self-center mt-3 lg-mt-0" align="justify">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.col-md-4 {
  height: 150px;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
}

.col-md-4 p {
  margin: 1px 0px;
}

.col-md-4 #year {
  font-weight: bold;
}

.col-md-4 #location {
  font-size: 13px;
}
</style>
