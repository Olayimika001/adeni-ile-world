<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import CartItem from '@/components/cart/CartItem.vue'
import CartSummary from '@/components/cart/CartSummary.vue'

const router = useRouter()
const cartStore = useCartStore()

const shipping = 0 // Free shipping
const tax = 0 // No tax for now

function handleUpdateQuantity(productId, quantity) {
  cartStore.updateQuantity(productId, quantity)
}

function handleRemoveItem(productId) {
  cartStore.removeItem(productId)
}

function proceedToCheckout() {
  router.push('/checkout')
}

function continueShopping() {
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
          <span class="text-gray-700">Shopping Cart</span>
        </nav>
      </div>
    </div>

    <!-- Cart Content -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>

        <!-- Cart Has Items -->
        <div v-if="cartStore.items.length > 0" class="grid lg:grid-cols-3 gap-8">
          <!-- Cart Items -->
          <div class="lg:col-span-2">
            <div class="bg-white border border-primary/20 rounded-lg p-6">
              <h2 class="text-xl font-semibold text-foreground mb-4">
                Cart Items ({{ cartStore.cartCount }})
              </h2>
              <div>
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
            <div class="mt-6">
              <button
                @click="continueShopping"
                class="text-secondary font-medium hover:opacity-90 flex items-center gap-2"
              >
                <span>←</span>
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>

          <!-- Cart Summary -->
          <div class="lg:col-span-1">
            <div class="sticky top-4">
              <CartSummary
                :subtotal="cartStore.subtotal"
                :shipping="shipping"
                :tax="tax"
              >
                <button
                  @click="proceedToCheckout"
                  class="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition shadow-md hover:shadow-lg"
                >
                  Proceed to Checkout
                </button>
              </CartSummary>
            </div>
          </div>
        </div>

        <!-- Empty Cart State -->
        <div v-else class="text-center py-16">
          <div class="text-6xl mb-4">🛒</div>
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p class="text-gray-600 mb-8">Add some products to your cart to get started!</p>
          <button
            @click="continueShopping"
            class="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition"
          >
            Browse Products
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
