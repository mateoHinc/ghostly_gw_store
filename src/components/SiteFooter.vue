<template>
  <footer class="py-4 footer">
    <div
      class="d-flex flex-wrap alig-items-center justify-content-between gap-3 container"
    >
      <span
        class="small"
        :class="theme === 'dark' ? 'text-white-50' : 'text-muted'"
        >© {{ year }} Ghostly.GW Clothes. All rights reserved.</span
      >
      <div class="d-flex gap-3">
        <a href="#" :class="theme === 'dark' ? 'text-white-50' : 'text-dark'"
          ><i class="bi bi-instagram"></i
        ></a>
        <a href="#" :class="theme === 'dark' ? 'text-white-50' : 'text-dark'"
          ><i class="bi bi-youtube"></i
        ></a>
        <a href="#" :class="theme === 'dark' ? 'text-white-50' : 'text-dark'"
          ><i class="bi bi-discord"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({ theme: String });
const year = ref("");
onMounted(() => {
  year.value = String(new Date().getFullYear());
});
</script>

<style></style>
