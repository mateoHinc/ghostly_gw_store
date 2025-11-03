<template>
  <header class="d-flex hero" id="hero">
    <div class="py-5 container hero-content">
      <div class="align-items-center row g-4">
        <div class="col-lg-6">
          <span class="mb-3 text-uppercase badge tag">Drop • Limited</span>
          <h1 class="display-3 fw-bold glow brand-title">
            Urban clothing designed to make an impact
          </h1>
          <p
            class="lead"
            :class="theme === 'dark' ? 'text-white-50' : 'text-dark'"
          >
            Durable, flexible, and stylish: garments designed for jumps, wall
            runs, and your most creative lines.
          </p>
          <div class="d-flex gap-3 mt-3">
            <a href="#products" class="text-dark btn btn-info btn-lg fw-bold">
              <i class="bi bi-compass">Explore</i>
            </a>
            <a
              href="#aboutUs"
              class="btn"
              :class="
                theme === 'dark'
                  ? 'btn-outline-light btn-lg'
                  : 'btn-outline-dark btn-lg'
              "
            >
              <i class="bi bi-lightning"></i>
              Why Ghostly_GW Clothes?
            </a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="p-3 card hover-rise">
            <img
              src="../assets/images/photoHero3.jpg"
              alt="XXXXXXXYYYYYYY"
              class="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({ theme: String });
</script>

<style></style>
