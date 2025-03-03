import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavigationStore = defineStore("navigation", () => {
  const items = ref([
    { label: "Home", icon: "pi pi-home", to: "/" },
    { label: "Elixirs", icon: "pi pi-flask", to: "/elixirs" },
    { label: "Houses", icon: "pi pi-building", to: "/houses" },
    { label: "Ingredients", icon: "pi pi-apple", to: "/ingredients" },
    { label: "Spells", icon: "pi pi-bolt", to: "/spells" },
    { label: "Wizards", icon: "pi pi-user", to: "/wizards" },
  ]);

  return { items };
});
