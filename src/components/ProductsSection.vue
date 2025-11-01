<template>
  <section id="products" class="py-5 container">
    <div
      class="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-3"
    >
      <div>
        <h2 class="m-0 section-title display-5">Featured Collection</h2>
        <div class="mt-2 divider"></div>
      </div>
      <div class="d-flex gap-2">
        <button
          v-for="c in categories"
          :key="c"
          class="filter-btn text-uppercase btn btn-sm"
          :class="{ active: selectedCategory === c }"
          @click="$emit('update-category', c)"
        >
          {{ c }}
        </button>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-12 col-sm-6 col-lg-4" v-for="p in filtered" :key="p.id">
        <ProductCard
          :theme="theme"
          :product="p"
          @add-to-cart="$emit('add-to-cart', p)"
        />
      </div>
    </div>

    <div class="mt-4 text-center">
      <a
        href="#contacto"
        class="btn"
        :class="theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'"
        >View complete catalog</a
      >
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import ProductCard from "./ProductCard.vue";

const props = defineProps({
  theme: String,
  categories: Array,
  selectedCategory: String,
  products: Array,
});

const filtered = computed(() => {
  return props.selectedCategory === "All"
    ? props.products
    : props.products.filter((p) => p.category === props.selectedCategory);
});
</script>

<style></style>
