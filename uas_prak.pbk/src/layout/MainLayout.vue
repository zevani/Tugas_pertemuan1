<!-- src/layout/MainLayout.vue -->
<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-9 text-white">
    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-grey-8">
      <q-list dark>
        <DropdownNavigation />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout> 
</template>

<script>
import { ref } from 'vue';
import DropdownNavigation from '../components/DropdownNavigation.vue';

export default {
  name: 'MainLayout',
  components: {
    DropdownNavigation
  },
  setup() {
    const leftDrawerOpen = ref(false);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer
    };
  }
};
</script>

<style scoped>
/* Scoped styles for MainLayout.vue */
</style>
