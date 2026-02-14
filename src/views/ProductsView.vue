<script setup>
import { ref, computed } from 'vue'
import ProductGrid from '@/components/product/ProductGrid.vue'
import { products } from '@/data/products'
import productHero from '@/assets/product page.jpeg'

const selectedCategory = ref('All')
const searchQuery = ref('')
const sortOption = ref('featured')

const categories = computed(() => {
  const unique = Array.from(new Set(products.map(p => p.category)))
  return ['All', ...unique]
})

const filteredProducts = computed(() => {
  const byCategory =
    selectedCategory.value === 'All'
      ? products
      : products.filter(p => p.category === selectedCategory.value)
  const bySearch = searchQuery.value.trim()
    ? byCategory.filter(p =>
        (p.name + ' ' + p.description + ' ' + p.category)
          .toLowerCase()
          .includes(searchQuery.value.trim().toLowerCase())
      )
    : byCategory
  let sorted = [...bySearch]
  switch (sortOption.value) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price)
      break
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name))
      break
    default:
      // featured: keep natural order
      break
  }
  return sorted
})

const productCount = computed(() => filteredProducts.value.length)
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        :src="productHero"
        alt="Our agricultural products"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 hero-overlay"></div>
      <div class="relative z-10 container mx-auto px-4 text-center">
        <p class="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary-foreground/80 mb-3">
          Consulting · Agriculture · Aquaculture
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-primary-foreground">Our Products</h1>
        <p class="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Explore language services, farm produce, and aquaculture products crafted with care.
        </p>
      </div>
    </section>

    <!-- Catalog Section -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <!-- Controls -->
        <div class="mb-8 space-y-4">
          <div class="flex flex-wrap gap-3 items-center justify-between">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="[
                  'px-5 py-2.5 rounded-lg font-medium transition-all',
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-primary/5 text-primary hover:bg-primary/10 border border-primary/20'
                ]"
              >
                {{ category }}
              </button>
            </div>
            <div class="flex items-center gap-3">
              <div class="hidden sm:block text-gray-600 text-sm">
                Showing <span class="font-semibold text-primary">{{ productCount }}</span>
                {{ productCount === 1 ? 'product' : 'products' }}
              </div>
              <select v-model="sortOption" class="px-3 py-2 border rounded-lg bg-white">
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </div>
          </div>
          <div>
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Search products..."
              class="w-full sm:w-96 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <!-- Products Grid -->
        <ProductGrid :products="filteredProducts" />

        <!-- Empty State -->
        <div v-if="filteredProducts.length === 0" class="text-center py-16">
          <p class="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      </div>
    </section>
  </div>
</template>
