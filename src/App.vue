<template>
  <div>
    <Navbar />
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { productsData } from "./data/datas.js";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import ProductsSection from "./components/ProductsSection.vue";
import About from "./components/About.vue";

const cartCount = ref(0);
const email = ref("");
const selectedCategory = ref("All");
const categories = ["All", "T-shirts", "sweatshirts", "caps"];

const products = ref(productsData);
// const products = [
//     { id: 1, name: 'Camiseta Drift Tee', price: 129000, category: 'Camisetas', isNew: true, desc: 'Algodón premium 240gsm, cuello reforzado.', image: 'https://images.unsplash.com/photo-1548883354-6db3da77e08e?q=80&w=1200&auto=format&fit=crop' },
//     { id: 2, name: 'Hoodie Apex', price: 199000, category: 'Hoodies', isNew: false, desc: 'Polar liviano + capucha de 3 paneles.', image: 'https://images.unsplash.com/photo-1520974735194-5f39db52d1b2?q=80&w=1200&auto=format&fit=crop' },
//     { id: 3, name: 'Jogger Impact', price: 189000, category: 'Joggers', isNew: true, desc: 'Rodillas reforzadas y bolsillo oculto.', image: 'https://images.unsplash.com/photo-1594751543129-6701ad444259?q=80&w=1200&auto=format&fit=crop' },
//     { id: 4, name: 'Gorra RailCap', price: 79000, category: 'Accesorios', isNew: false, desc: 'Ripstop, ajuste rápido.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop' },
//     { id: 5, name: 'Camiseta Flow', price: 119000, category: 'Camisetas', isNew: false, desc: 'Secado rápido y costuras planas.', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
//     { id: 6, name: 'Hoodie Rail', price: 209000, category: 'Hoodies', isNew: true, desc: 'Tejido técnico y bolsillo canguro.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' }
//   ]

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
</script>

<style lang="scss"></style>
