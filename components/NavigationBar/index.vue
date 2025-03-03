<script setup lang="ts">
import Menubar from "primevue/menubar";
import { useNavigationStore } from "~/stores/navigation";
import { storeToRefs } from "pinia";

const navigationStore = useNavigationStore();
const { items } = storeToRefs(navigationStore);
</script>

<template>
  <div>
    <!-- Fixed Navigation Bar -->
    <div class="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
      <div class="container mx-auto">
        <Menubar :model="items" class="text-white rounded-lg">
          <template #item="{ item }">
            <NuxtLink v-if="item.to" :to="item.to" class="p-menuitem-link flex items-center gap-2 px-4 py-2">
              <i :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </NuxtLink>
            <span v-else class="p-menuitem-text">{{ item.label }}</span>
          </template>
        </Menubar>
      </div>
    </div>

    <!-- Page Content -->
    <div class="pt-16">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* PrimeVue Custom Styling */
.p-menubar {
  background-color: #1f2937 !important; /* Dark theme */
  border-radius: 8px;
}

.p-menubar .p-menuitem-link {
  color: white !important;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
}

.p-menubar .p-menuitem-link:hover {
  background-color: #374151 !important; /* Dark hover effect */
}
</style>
