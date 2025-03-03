import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const elixirs = ref([]);
  const houses = ref([]);
  const spells = ref([]);
  const wizards = ref([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchData = async (endpoint: string, dataRef: any) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`https://wizard-world-api.herokuapp.com/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}`);
      }
      dataRef.value = await response.json();
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  // Specific API Calls
  const fetchElixirs = async () => fetchData("Elixirs", elixirs);
  const fetchHouses = async () => fetchData("Houses", houses);
  const fetchSpells = async () => fetchData("Spells", spells);
  const fetchWizards = async () => fetchData("Wizards", wizards);

  return { elixirs, houses, spells, wizards, loading, error, fetchElixirs, fetchHouses, fetchSpells, fetchWizards };
});
