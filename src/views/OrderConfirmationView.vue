<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const orderNumber = route.query.orderNumber || 'N/A'

onMounted(() => {
  // If no order number, redirect to home
  if (!route.query.orderNumber) {
    router.push('/')
  }
})

function continueShopping() {
  router.push('/products')
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Success Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <!-- Success Icon -->
          <div class="mb-6">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          <!-- Success Message -->
          <h1 class="text-4xl font-bold text-foreground mb-4">Order Confirmed!</h1>
          <p class="text-xl text-gray-600 mb-8">
            Thank you for your order. We've received your order and will begin processing it shortly.
          </p>

          <!-- Order Number -->
          <div class="bg-primary/5 border border-primary/30 rounded-lg p-6 mb-8">
            <p class="text-sm text-gray-600 mb-1">Order Number</p>
            <p class="text-2xl font-bold text-foreground">{{ orderNumber }}</p>
          </div>

          <!-- What's Next -->
          <div class="bg-white border border-gray-200 rounded-lg p-6 mb-8 text-left">
            <h2 class="text-xl font-bold text-gray-900 mb-4">What happens next?</h2>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1">✓</span>
                <span>You'll receive an order confirmation email shortly</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1">✓</span>
                <span>We'll send you shipping updates as your order is processed</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-primary mt-1">✓</span>
                <span>Your order will be delivered within 5-7 business days</span>
              </li>
            </ul>
          </div>

          <!-- Continue Shopping Button -->
          <button
            @click="continueShopping"
            class="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition shadow-md hover:shadow-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
