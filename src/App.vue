<template>
  <div>
    <Navbar />
    <Hero :theme="theme" />
    <ProductsSection />
  </div>
</template>

<script setup>
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import ProductsSection from "./components/ProductsSection.vue";
</script>

<style lang="scss"></style>
