<template>
  <section id="contact" class="py-5 container">
    <div class="row g-4">
      <div class="col-lg-8">
        <div class="p-4 h-100 card">
          <h4 class="section-title">
            Do you have a store or want to customize your equipment?
          </h4>
          <p :class="theme === 'dark' ? 'text-white-50' : 'text-muted'">
            Write to us for wholesale sales, collaborations, or uniforms for
            your crew.
          </p>
          <form class="row g-3">
            <div class="col-md-6">
              <input
                type="text"
                class="bg-themed form-control"
                placeholder="Name"
                required
              />
            </div>
            <div class="col-md-6">
              <input
                type="email"
                class="bg-themed form-control"
                placeholder="E-mail"
                required
              />
            </div>
            <div class="col-12">
              <textarea
                class="bg-themed form-control"
                rows="4"
                placeholder="Tell us your idea"
              ></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn-outline-info btn">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="p-4 h-100 card">
          <h5 class="mb-3">Visit us</h5>
          <p
            class="mb-1"
            :class="theme === 'dark' ? 'text-white-50' : 'text-muted'"
          >
            <i class="bi bi-geo-alt">Belén, Medellin</i>
          </p>
          <p
            class="mb-1"
            :class="theme === 'dark' ? 'text-white-50' : 'text-muted'"
          >
            <i class="bi bi-instagram">@ghostly</i>
          </p>
          <p
            class="mb-1"
            :class="theme === 'dark' ? 'text-white-50' : 'text-muted'"
          >
            <i class="bi bi-tiktok">@ghostly</i>
          </p>
          <div class="rounded overflow-hidden ratio ratio-4x3">
            <img
              src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop"
              alt="Map stylized"
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
