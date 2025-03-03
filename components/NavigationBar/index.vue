<script setup lang="ts">
import Menubar from "primevue/menubar";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Elixirs",
    icon: "pi pi-star",
  },
  {
    label: "Houses",
    icon: "pi pi-star",
  },
  {
    label: "Ingredients",
    icon: "pi pi-star",
  },
  {
    label: "Spells",
    icon: "pi pi-star",
  },
  {
    label: "Wizard",
    icon: "pi pi-star",
  },
]);
</script>
<template>
  <div class="card">
    <Menubar :model="items" />
  </div>
</template>
<style></style>
