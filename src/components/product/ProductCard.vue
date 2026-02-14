<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <router-link
    :to="`/products/${product.slug}`"
    class="block rounded-lg border border-primary/20 bg-white shadow hover:shadow-md transition"
  >
    <div class="aspect-[4/3] bg-primary/5 flex items-center justify-center text-4xl text-primary/40 overflow-hidden">
      <img
        v-if="product.image"
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover"
      />
      <span v-else>{{ product.category === 'Consulting' ? '📖' : '🌱' }}</span>
    </div>
    <div class="p-4">
      <h3 class="font-semibold text-foreground">{{ product.name }}</h3>
      <p class="text-primary font-bold mt-1">
        {{ new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(product.price) }}
      </p>
    </div>
  </router-link>
</template>
