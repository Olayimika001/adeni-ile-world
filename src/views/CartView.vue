<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import CartItem from '@/components/cart/CartItem.vue'
import CartSummary from '@/components/cart/CartSummary.vue'

const router = useRouter()
const cartStore = useCartStore()

const shipping = 0
const tax = 0

const updateQuantity = (productId, quantity) => {
  cartStore.updateQuantity(productId, quantity)
}

const removeItem = (productId) => {
  cartStore.removeItem(productId)
}

const goToCheckout = () => router.push('/checkout')
const goToProducts = () => router.push('/products')
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Breadcrumb -->
    <div class="bg-primary/5 border-b border-primary/20">
      <div class="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <nav class="flex items-center gap-2 text-xs sm:text-sm">
          <router-link to="/" class="text-primary hover:opacity-90 font-medium">
            Home
          </router-link>
          <span class="text-gray-400">›</span>
          <span class="text-gray-700">Shopping Cart</span>
        </nav>
      </div>
    </div>

    <!-- Cart Content -->
    <section class="py-6 sm:py-12">
      <div class="container mx-auto px-3 sm:px-4">
        <h1 class="text-2xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8">
          Shopping Cart
        </h1>

        <!-- Cart Has Items -->
        <div
          v-if="cartStore.items.length > 0"
          class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <!-- Cart Items -->
          <div class="lg:col-span-2">
            <div class="bg-white border border-primary/20 rounded-lg p-4 sm:p-6">
              <h2 class="text-lg sm:text-xl font-semibold text-foreground mb-4">
                Cart Items ({{ cartStore.cartCount }})
              </h2>

              <div class="space-y-4">
                <CartItem
                  v-for="item in cartStore.items"
                  :key="item.product.id"
                  :item="item"
                  @update-quantity="handleUpdateQuantity"
                  @remove="handleRemoveItem"
                />
              </div>
            </div>

            <!-- Continue Shopping -->
            <div class="mt-4 sm:mt-6">
              <button
                @click="continueShopping"
                class="text-secondary text-sm sm:text-base font-medium hover:opacity-90 flex items-center gap-2"
              >
                <span>←</span>
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>

          <!-- Cart Summary -->
          <div class="lg:col-span-1">
            <!-- sticky only on desktop -->
            <div class="lg:sticky lg:top-4">
              <CartSummary
                :subtotal="cartStore.subtotal"
                :shipping="shipping"
                :tax="tax"
              >
                <button
                  @click="proceedToCheckout"
                  class="w-full px-4 sm:px-6 py-3 text-sm sm:text-base bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition shadow-md hover:shadow-lg"
                >
                  Proceed to Checkout
                </button>
              </CartSummary>
            </div>
          </div>
        </div>

        <!-- Empty Cart State -->
        <div v-else class="text-center py-10 sm:py-16">
          <div class="text-5xl sm:text-6xl mb-4">🛒</div>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            Your cart is empty
          </h2>
          <p class="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-4">
            Add some products to your cart to get started!
          </p>
          <button
            @click="continueShopping"
            class="inline-block px-5 sm:px-6 py-3 text-sm sm:text-base bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition"
          >
            Browse Products
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
