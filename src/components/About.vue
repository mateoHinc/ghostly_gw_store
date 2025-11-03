<template>
  <section id="aboutUs" class="py-5 container">
    <div class="align-items-center row g-4">
      <div class="col-lg-6">
        <h2 class="section-title display-6">Made to move</h2>
        <p :class="theme === 'dark' ? 'text-white-50' : 'text-muted'">
          Every Ghostly_GW garment is tested by parkour and freerunning
          athletes. We use reinforced seams, quick-drying fabrics, and cuts that
          don't restrict movement.
        </p>
        <ul
          class="list-unstyled small"
          :class="theme === 'dark' ? 'text-white-50' : 'text-muted'"
        >
          <li class="mb-2">
            <i class="text-info bi bi-check2-circle"></i> Breathable and
            tear-resistant fabrics
          </li>
          <li class="mb-2">
            <i class="text-info bi bi-check2-circle"></i> Breathable and
            tear-resistant fabrics
          </li>
          <li class="mb-2">
            <i class="text-info bi bi-check2-circle"></i> Breathable and
            tear-resistant fabrics
          </li>
        </ul>
      </div>
      <div class="col-lg-6">
        <div class="row g-3">
          <div class="col-6">
            <img
              src="../assets/images/ghosts2.jpg"
              alt="Sudadera urbana"
              class="rounded w-100 hover-rise"
            />
          </div>
          <div class="col-6">
            <img
              src="../assets/images/ghosts2.jpg"
              alt="Sudadera urbana"
              class="rounded w-100 hover-rise"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ theme: String });
</script>

<style></style>
