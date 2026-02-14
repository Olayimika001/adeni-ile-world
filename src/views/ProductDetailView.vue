<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { products } from '@/data/products'
import ProductDetail from '@/components/product/ProductDetail.vue'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const quantity = ref(1)
const showSuccess = ref(false)

const product = computed(() => products.find(p => p.slug === route.params.slug))

function addToCart() {
  if (product.value) {
    cartStore.addItem(product.value, quantity.value)
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  }
}

function goToProducts() {
  router.push('/products')
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Breadcrumb -->
    <div class="bg-primary/5 border-b border-primary/20">
      <div class="container mx-auto px-4 py-3">
        <nav class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-primary hover:opacity-90 font-medium">Home</router-link>
          <span class="text-gray-400">›</span>
          <router-link to="/products" class="text-primary hover:opacity-90 font-medium">Products</router-link>
          <span v-if="product" class="text-gray-400">›</span>
          <span v-if="product" class="text-gray-700">{{ product.name }}</span>
        </nav>
      </div>
    </div>

    <!-- Product Detail -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <!-- Success Message -->
        <div v-if="showSuccess" class="mb-6 bg-primary/5 border border-primary/30 text-foreground px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
          <span class="text-xl">✓</span>
          <span class="font-medium">Added to cart successfully!</span>
        </div>

        <!-- Product Found -->
        <div v-if="product">
          <ProductDetail :product="product">
            <!-- Category Badge -->
            <div class="mt-4">
              <span class="inline-block px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-full">
                {{ product.category }}
              </span>
            </div>

            <!-- Quantity and Add to Cart -->
            <div class="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div class="flex items-center gap-3">
                <label for="quantity" class="text-sm font-medium text-gray-700">Quantity:</label>
                <input
                  id="quantity"
                  v-model.number="quantity"
                  type="number"
                  min="1"
                  class="border border-primary/30 rounded-lg px-4 py-2 w-20 focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <button
                @click="addToCart"
                class="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition shadow-md hover:shadow-lg"
              >
                Add to Cart
              </button>
            </div>
          </ProductDetail>

          <!-- Back to Products -->
          <div class="mt-8">
            <button
              @click="goToProducts"
              class="text-secondary font-medium hover:opacity-90 flex items-center gap-2"
            >
              <span>←</span>
              <span>Back to Products</span>
            </button>
          </div>
        </div>

        <!-- Product Not Found -->
        <div v-else class="text-center py-16">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p class="text-gray-600 mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <button
            @click="goToProducts"
            class="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition"
          >
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
