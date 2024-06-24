<script setup>
import { ref } from 'vue';
import Card from '../components/Card.vue';
import List from '../components/ItemList.vue';
import CardItem from '../components/CardItem.vue';

const skill = ref([
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "SQL",
  "Node JS",
  "Python",
  "Vue",
  "React",
]);

const experience = ref([
  {
    year: "2022 - 2023",
    job: "Project-group",
    location: "Universitas Islam Riau, Teknik Informatika",
    description:
      "Project sistem data kependudukan pada matakuliah Basis Data II"
  },
  {
    year: "2023 - 2024",
    job: "Project-group",
    location: "Universitas Islam Riau, Teknik Informatika",
    description:
      "Project sistem sadar peduli lingkungan berbasis mobile pada matakuliah Rekayasa Perangkat Lunak "
  }

])

</script>
<template>
<div class="container" id="resume">
    <div class="col-md-6 mx-auto">
      <h1 class="text-center fw-bold fs-1">Resume</h1>
      <h2 class="fw-bold mt-5">Skills</h2>
      <Card>
        <List :data="skill" />
      </Card>

      <h2 class="fw-bold mt-5">Experiences</h2>
      <Card v-for="data in experience" class="mb-4">
        <CardItem
          :year="data.year"
          :job="data.job"
          :location="data.location"
          :description="data.description" />
      </Card>



                        
                        
    </div>
</div>
    

</template>

<style scoped>
#resume {
  margin-top: 100px;
  min-height: 100vh;
}

.card {
    border: 0px;
}

ul li {
    font-size: 15px;
    padding: 5px 20px;
    background-color: rgb(248, 248, 248);
    list-style-type: none;
    border-radius: 50px;
    font-weight: bold;
}
</style>