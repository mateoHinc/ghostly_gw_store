<template>
  <nav class="sticky-top navbar navbar-expand-lg">
    <div class="py-2 container">
      <a
        href="#"
        class="d-flex align-items-center gap-2 text-uppercase navbar-brand fw-bold"
      >
        <i class="text-info bi bi-lightning-charge-fill"></i>
        <span class="brand-title fs-3">Ghost Warriors Clothes</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
        aria-controls="nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="align-items-lg-center ms-auto mb-2 mb-lg-0 navbar-nav">
          <li class="nav-item">
            <a
              href="#products"
              class="nav-link"
              :class="theme === 'dark' ? 'text-white-50' : 'text-dark'"
              >Collection</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#aboutUs"
              class="nav-link"
              :class="theme === 'dark' ? 'text-white-50' : 'text-dark'"
              >About Us</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#contact"
              class="nav-link"
              :class="theme === 'dark' ? 'text-white-50' : 'text-dark'"
              >Contact Us</a
            >
          </li>
          <li class="ms-lg-3 me-2 nav-item">
            <button
              class="position-relative btn"
              :class="
                theme === 'dark' ? 'btn-outline-info' : 'btn-outline-dark'
              "
              @click="$emit('open-cart')"
            >
              <i class="bi bi-bag"></i>
              <span
                class="top-0 position-absolute bg-danger rounded-pill translate-middle start-100 badge"
                >{{ cartCount }}</span
              >
            </button>
          </li>
          <li class="nav-item">
            <button
              class="btn"
              :class="
                theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'
              "
              @click="$emit('toggle-theme')"
            >
              <i :class="theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon'"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({ theme: String, cartCount: Number });
</script>

<style></style>
