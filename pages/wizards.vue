<script setup lang="ts">
import { ref, onMounted } from "vue";

const wizards = ref([]);
const error = ref<string | null>(null);
const pending = ref(true);

const fetchWizards = async () => {
  try {
    const response = await fetch("https://wizard-world-api.herokuapp.com/Wizards");

    if (!response.ok) {
      throw new Error("Failed to fetch wizards");
    }

    wizards.value = await response.json();
  } catch (err: any) {
    console.warn("API is down, using mock data");
    wizards.value = [{ firstName: "Albus", lastName: "Dumbledore" }];
    error.value = err.message;
  } finally {
    pending.value = false;
  }
};

onMounted(fetchWizards);
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white p-10">
    <h1 class="text-3xl font-bold mb-6">Famous Wizards</h1>

    <div v-if="pending" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">Error: {{ error }}</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="wizard in wizards" :key="wizard.id"
        class="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <h2 class="text-xl font-semibold">{{ wizard.firstName }} {{ wizard.lastName }}</h2>
      </div>
    </div>
  </div>
</template>
