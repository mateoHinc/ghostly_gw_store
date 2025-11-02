<template>
  <section class="py-5 container">
    <div class="p-4 p-md-5 rounded newsletter">
      <div class="align-items-center row g-3">
        <div class="col-lg-6">
          <h3 class="m-0 section-title">Join the Drop List</h3>
          <p
            class="mb-0"
            :class="theme === 'dark' ? 'text-white-50' : 'text-muted'"
          >
            Be the first to find out about releases, restocks, and crew events.
          </p>
        </div>
        <div class="col-lg-6">
          <form class="d-flex gap-2" @submit.prevent="$emit('suscribe')">
            <input
              v-model="model"
              type="email"
              required
              class="bg-themed form-control form-control-lg"
              placeholder="yyyyy@email.com"
            />
            <button class="text-dark btn btn-info btn-lg fw-bold">Join</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({ theme: String, email: String });
const emit = defineEmits(["update:email", "subscribe"]);
const model = computed({
  get: () => props.email,
  set: (v) => emit("update:email", v),
});
</script>

<style></style>
