<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import CheckoutForm from '@/components/checkout/CheckoutForm.vue'

const router = useRouter()
const cartStore = useCartStore()

const shipping = 0
const tax = 0

function formatCurrency(value) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(value)
}

const formData = ref({
  email: '',
  phone: '',
  fullName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  country: '',
  paymentMethod: 'credit-card',
})

onMounted(() => {
  // Redirect to cart if empty
  if (cartStore.items.length === 0) {
    router.push('/cart')
  }
})

async function handleOrderSubmit(data) {
  // Generate order number
  const orderNumber = 'ORD-' + Date.now()

  // Create order object
  const order = {
    orderNumber,
    customer: data,
    items: cartStore.items.map(item => ({
      id: item.product.id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
      total: item.product.price * item.quantity,
    })),
    subtotal: cartStore.subtotal,
    shipping,
    tax,
    total: cartStore.subtotal + shipping + tax,
    timestamp: new Date().toISOString(),
  }

  // Log order to console
  console.log('Order placed:', order)

  // Save order to database via API
  try {
    await saveOrderToDatabase(order)
    console.log('Order saved to database successfully')
  } catch (error) {
    console.error('Failed to save order to database:', error)
    // Continue with checkout even if save fails
  }

  // Clear cart
  cartStore.clearCart()

  // Redirect to confirmation page
  router.push({
    name: 'OrderConfirmation',
    query: { orderNumber },
  })
}

async function saveOrderToDatabase(order) {
  const response = await fetch('http://localhost:3001/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })

  if (!response.ok) {
    throw new Error('Failed to save order')
  }

  return response.json()
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
          <router-link to="/cart" class="text-primary hover:opacity-90 font-medium">Cart</router-link>
          <span class="text-gray-400">›</span>
          <span class="text-gray-700">Checkout</span>
        </nav>
      </div>
    </div>

    <!-- Checkout Content -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-foreground mb-8">Checkout</h1>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Checkout Form -->
          <div class="lg:col-span-2">
            <CheckoutForm
              v-model="formData"
              @submit="handleOrderSubmit"
            />
          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <div class="sticky top-4">
              <div class="bg-primary/5 border border-primary/30 rounded-lg p-6">
                <h2 class="text-xl font-bold text-foreground mb-4">Order Summary</h2>

                <!-- Cart Items -->
                <div class="space-y-3 mb-4 pb-4 border-b border-primary/30">
                  <div
                    v-for="item in cartStore.items"
                    :key="item.product.id"
                    class="flex justify-between text-sm"
                  >
                    <div class="flex-1">
                      <p class="font-medium text-gray-900">{{ item.product.name }}</p>
                      <p class="text-gray-600">Qty: {{ item.quantity }}</p>
                    </div>
                    <p class="font-semibold text-gray-900">{{ formatCurrency(item.product.price * item.quantity) }}</p>
                  </div>
                </div>

                <!-- Totals -->
                <div class="space-y-2">
                  <div class="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span class="font-semibold">{{ formatCurrency(cartStore.subtotal) }}</span>
                  </div>
                  <div class="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span class="font-semibold">{{ shipping === 0 ? 'Free' : formatCurrency(shipping) }}</span>
                  </div>
                  <div class="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span class="font-semibold">{{ formatCurrency(tax) }}</span>
                  </div>
                  <div class="border-t border-primary/30 pt-2 mt-2">
                    <div class="flex justify-between text-foreground text-lg font-bold">
                      <span>Total</span>
                      <span>{{ formatCurrency(cartStore.subtotal + shipping + tax) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
