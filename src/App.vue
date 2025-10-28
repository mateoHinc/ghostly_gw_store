<template>
  <div>
    <Navbar />
    <Hero :theme="theme" />
  </div>
</template>

<script setup>
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
</script>

<style lang="scss"></style>
