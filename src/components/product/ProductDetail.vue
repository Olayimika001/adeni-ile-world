<script setup>
defineProps({
  product: {
    type: Object,
    default: null,
  },
})
</script>

<template>
  <div v-if="product" class="grid md:grid-cols-2 gap-8">
    <div class="aspect-square bg-primary/5 rounded-lg flex items-center justify-center text-6xl text-primary/40 overflow-hidden">
      <img
        v-if="product.image"
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover rounded-lg"
      />
      <span v-else>{{ product.category === 'Consulting' ? '📖' : '🌱' }}</span>
    </div>
    <div>
      <h1 class="text-3xl font-bold text-foreground">{{ product.name }}</h1>
      <p class="text-2xl text-primary mt-2">
        {{ new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(product.price) }}
      </p>
      <p class="mt-4 text-gray-600">{{ product.description }}</p>
      <slot />
    </div>
  </div>
</template>
