<script setup lang="ts">
import { useRoute } from 'vue-router';
import MainLayout from './layout/MainLayout.vue';
import { computed } from 'vue';

const route = useRoute();
const useMainLayout = computed(() => {
  return !route.path.includes('/login');
});
</script>

<template>
  <MainLayout v-if="useMainLayout">
    <router-view />
  </MainLayout>

  <!-- Render without layout for login page -->
  <router-view v-else />
</template>
