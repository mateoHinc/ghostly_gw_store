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
        <h3>Product Card</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
