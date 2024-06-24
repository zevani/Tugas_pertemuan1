// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layout/MainLayout.vue';
import WeatherPage from '../components/WeatherPage.vue';
import Tugas1 from '../components/Tugas1.vue';
import Tugas2 from '../components/Tugas2.vue';
import Tugas3 from '../components/Tugas3.vue';
import Tugas4 from '../components/Tugas4.vue';
import Tugas5 from '../components/Tugas5.vue';
import Tugas6 from '../components/Tugas6.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: WeatherPage },
      { path: 'tugas1', component: Tugas1 },
      { path: 'tugas2', component: Tugas2 },
      { path: 'tugas3', component: Tugas3 },
      { path: 'tugas4', component: Tugas4 },
      { path: 'tugas5', component: Tugas5 },
      { path: 'tugas6', component: Tugas6 },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
