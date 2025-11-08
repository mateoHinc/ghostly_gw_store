<template>
  <div>
    <Navbar
      :theme="theme"
      :cart-count="cartCount"
      @toggle-theme="toggleTheme"
      @open-cart="showCartToast"
    />
    <Hero :theme="theme" />
    <ProductsSection
      :theme="theme"
      :categories="categories"
      :selected-category="selectedCategory"
      :products="products"
      @update-category="selectedCategory = $event"
      @add-to-cart="addToCart"
    />
    <About :theme="theme" />
    <Newsletter :theme="theme" v-model:email="email" @subscribe="subscribe" />
    <Contact :theme="theme" />
    <SiteFooter :theme="theme" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { productsData } from "./data/datas.js";
import { useTheme } from "./composables/useTheme.js";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import ProductsSection from "./components/ProductsSection.vue";
import About from "./components/About.vue";
import Newsletter from "./components/Newsletter.vue";
import Contact from "./components/Contact.vue";
import SiteFooter from "./components/SiteFooter.vue";

const { theme, toggleTheme } = useTheme();

const cartCount = ref(0);
const email = ref("");
const selectedCategory = ref("All");
const categories = ["All", "T-shirts", "Sweatshirts", "Caps"];

const products = ref(productsData);

function addToCart() {
  cartCount.value++;
  showCartToast();
}

function showCartToast() {
  const toastEl = document.getElementById("cartToast");
  if (!toastEl) return;

  const t = new window.bootstrap.Toast(toastEl, { delay: 1800 });
  t.show();
}

function subscribe() {
  if (!email.value) return;
  alert(`¡Gracias! Te avisaremos a ${email.value}`);
  email.value = "";
}
</script>

<style lang="scss"></style>
