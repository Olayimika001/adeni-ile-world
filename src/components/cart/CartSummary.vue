<script setup>
import { computed } from 'vue'

const props = defineProps({
  subtotal: {
    type: Number,
    default: 0,
  },
  shipping: {
    type: Number,
    default: 0,
  },
  tax: {
    type: Number,
    default: 0,
  },
})

const total = computed(() => props.subtotal + props.shipping + props.tax)

function formatCurrency(value) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(value)
}
</script>

<template>
  <div class="border border-primary/30 rounded-lg p-6 bg-primary/5">
    <h2 class="text-xl font-bold text-foreground mb-4">Order Summary</h2>
    
    <div class="space-y-3">
      <!-- Subtotal -->
      <div class="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span class="font-semibold">{{ formatCurrency(subtotal) }}</span>
      </div>

      <!-- Shipping -->
      <div class="flex justify-between text-gray-700">
        <span>Shipping</span>
        <span class="font-semibold">{{ shipping === 0 ? 'Free' : formatCurrency(shipping) }}</span>
      </div>

      <!-- Tax -->
      <div class="flex justify-between text-gray-700">
        <span>Tax</span>
        <span class="font-semibold">{{ formatCurrency(tax) }}</span>
      </div>

      <!-- Divider -->
      <div class="border-t border-primary/30 pt-3 mt-3">
        <div class="flex justify-between text-foreground text-lg font-bold">
          <span>Total</span>
          <span>{{ formatCurrency(total) }}</span>
        </div>
      </div>
    </div>

    <!-- Action Slot -->
    <div class="mt-6">
      <slot />
    </div>
  </div>
</template>
