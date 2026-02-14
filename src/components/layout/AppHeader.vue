<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const { cartCount } = storeToRefs(cartStore)
const router = useRouter()

const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

// Close menu when route changes
router.afterEach(() => {
  closeMobileMenu()
})
</script>

<template>
  <header class="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto flex items-center justify-between px-4 py-4">
      <!-- Logo -->
      <router-link
        to="/"
        class="text-xl font-bold tracking-tight hover:text-secondary transition-colors"
      >
        Lovington Vision
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-6">
        <router-link
          to="/"
          class="hover:text-secondary transition-colors"
          active-class="text-secondary font-medium"
        >
          Home
        </router-link>
        <router-link
          to="/products"
          class="hover:text-secondary transition-colors"
          active-class="text-secondary font-medium"
        >
          Products
        </router-link>
        <router-link
          to="/about"
          class="hover:text-secondary transition-colors"
          active-class="text-secondary font-medium"
        >
          About
        </router-link>
        <router-link
          to="/contact"
          class="hover:text-secondary transition-colors"
          active-class="text-secondary font-medium"
        >
          Contact
        </router-link>
        <router-link
          to="/cart"
          class="relative flex items-center gap-1.5 hover:text-secondary transition-colors"
          active-class="text-secondary font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>Cart</span>
          <span
            v-if="cartCount > 0"
            class="absolute -top-2 -right-2 bg-secondary text-primary rounded-full text-xs font-bold min-w-5 h-5 flex items-center justify-center px-1"
          >
            {{ cartCount }}
          </span>
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden p-2 hover:bg-primary/80 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!mobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu Drawer -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden fixed inset-0 top-[72px] bg-black bg-opacity-50 z-40"
      @click="closeMobileMenu"
    >
      <div
        class="bg-primary w-64 h-full shadow-xl transform transition-transform duration-300 ease-in-out"
        @click.stop
      >
        <div class="flex flex-col p-4 space-y-2">
          <router-link
            to="/"
            class="px-4 py-3 hover:bg-primary/80 rounded-lg transition-colors"
            active-class="bg-primary/80 text-secondary font-medium"
          >
            Home
          </router-link>
          <router-link
            to="/products"
            class="px-4 py-3 hover:bg-primary/80 rounded-lg transition-colors"
            active-class="bg-primary/80 text-secondary font-medium"
          >
            Products
          </router-link>
          <router-link
            to="/about"
            class="px-4 py-3 hover:bg-primary/80 rounded-lg transition-colors"
            active-class="bg-primary/80 text-secondary font-medium"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            class="px-4 py-3 hover:bg-primary/80 rounded-lg transition-colors"
            active-class="bg-primary/80 text-secondary font-medium"
          >
            Contact
          </router-link>
          <router-link
            to="/cart"
            class="relative px-4 py-3 hover:bg-primary/80 rounded-lg transition-colors flex items-center gap-2"
            active-class="bg-primary/80 text-secondary font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Cart</span>
            <span
              v-if="cartCount > 0"
              class="ml-auto bg-secondary text-primary rounded-full text-xs font-bold min-w-5 h-5 flex items-center justify-center px-1"
            >
              {{ cartCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
