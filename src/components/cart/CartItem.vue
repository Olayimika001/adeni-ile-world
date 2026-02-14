<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update-quantity', 'remove'])

const lineTotal = computed(() => {
  return (props.item.product?.price || 0) * props.item.quantity
})

function incrementQuantity() {
  emit('update-quantity', props.item.product.id, props.item.quantity + 1)
}

function decrementQuantity() {
  if (props.item.quantity > 1) {
    emit('update-quantity', props.item.product.id, props.item.quantity - 1)
  }
}

function updateQuantity(event) {
  const newQty = parseInt(event.target.value) || 1
  if (newQty >= 1) {
    emit('update-quantity', props.item.product.id, newQty)
  }
}

function removeItem() {
  emit('remove', props.item.product.id)
}
</script>

<template>
  <div class="flex gap-4 py-6 border-b border-gray-200 last:border-0">
    <!-- Product Image -->
    <div class="w-24 h-24 bg-primary/5 rounded-lg flex items-center justify-center text-3xl text-primary/40 shrink-0 overflow-hidden">
      <img
        v-if="item.product?.image"
        :src="item.product.image"
        :alt="item.product.name"
        class="w-full h-full object-cover"
      />
      <span v-else>{{ item.product?.category === 'Consulting' ? '📖' : item.product?.category === 'Aquaculture' ? '🐟' : '🌱' }}</span>
    </div>

    <!-- Product Info -->
    <div class="flex-1 min-w-0">
      <h3 class="font-semibold text-foreground text-lg">{{ item.product?.name }}</h3>
      <p class="text-primary font-medium mt-1">
        {{
          new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(item.product?.price || 0)
        }}
      </p>
      <p class="text-sm text-gray-500 mt-1">{{ item.product?.category }}</p>
    </div>

    <!-- Quantity Controls -->
    <div class="flex flex-col items-end gap-3">
      <div class="flex items-center gap-2 border border-primary/30 rounded-lg">
        <button
          @click="decrementQuantity"
          class="px-3 py-2 text-primary hover:bg-primary/5 transition"
          :disabled="item.quantity <= 1"
          :class="{ 'opacity-50 cursor-not-allowed': item.quantity <= 1 }"
        >
          −
        </button>
        <input
          :value="item.quantity"
          @change="updateQuantity"
          type="number"
          min="1"
          class="w-16 text-center border-0 focus:ring-0 py-2"
        />
        <button
          @click="incrementQuantity"
          class="px-3 py-2 text-primary hover:bg-primary/5 transition"
        >
          +
        </button>
      </div>

      <!-- Line Total -->
      <p class="text-lg font-bold text-foreground">
        {{ new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(lineTotal) }}
      </p>

      <!-- Remove Button -->
      <button
        @click="removeItem"
        class="text-sm text-red-600 hover:text-red-700 font-medium transition"
      >
        Remove
      </button>
    </div>
  </div>
</template>
