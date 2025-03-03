<script setup lang="ts">
import { ref, onMounted } from "vue";

const spells = ref([]);
const error = ref<string | null>(null);
const pending = ref(true);

const fetchSpells = async () => {
  try {
    const response = await fetch("https://wizard-world-api.herokuapp.com/Spells");

    if (!response.ok) {
      throw new Error(`Failed to fetch spells: ${response.statusText}`);
    }

    spells.value = await response.json();
  } catch (err: any) {
    error.value = err.message;
  } finally {
    pending.value = false;
  }
};

onMounted(fetchSpells);
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white py-10">
    <h1 class="text-3xl font-bold text-center mb-6">Wizard Spells</h1>

    <div v-if="pending" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">Error: {{ error }}</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
      <div v-for="spell in spells" :key="spell.id"
        class="bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h2 class="text-xl font-semibold">{{ spell.name }}</h2>
        <p class="text-gray-400 mt-2">{{ spell.effect }}</p>
      </div>
    </div>
  </div>
</template>
