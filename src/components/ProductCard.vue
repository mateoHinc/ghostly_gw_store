<template>
  <div class="position-relative h-100 card hover-rise">
    <span
      v-if="product.isNew"
      class="top-0 position-absolute m-3 end-0 badge badge-new"
      >New</span
    >
    <img :src="product.image" :alt="product.name" class="card-img-top" />
    <div class="d-flex flex-column card-body">
      <h5 class="mb-1 card-title">{{ product.name }}</h5>
      <p
        class="card-text small"
        :class="theme === 'dark' ? 'text-white-50' : 'text-muted'"
      >
        {{ product.desc }}
      </p>
      <div class="d-flex align-items-center justify-content-between mt-auto">
        <span class="fw-bold">$ {{ product.price }}</span>
        <button
          class="btn-outline-info btn btn-sm"
          @click="$emit('add-to-cart', product)"
        >
          <i class="bi bi-plus-lg">Add</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ product: Object, theme: String });
</script>

<style></style>
