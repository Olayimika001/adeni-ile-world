import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const cartCount = computed(() =>
    items.value.reduce((sum, i) => sum + i.quantity, 0)
  )

  const subtotal = computed(() =>
    items.value.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  )

  function addItem(product, quantity = 1) {
    const existing = items.value.find((i) => i.product.id === product.id)
    if (existing) existing.quantity += quantity
    else items.value.push({ product, quantity })
  }

  function removeItem(productId) {
    items.value = items.value.filter((i) => i.product.id !== productId)
  }

  function updateQuantity(productId, quantity) {
    const item = items.value.find((i) => i.product.id === productId)
    if (item) item.quantity = Math.max(0, quantity)
  }

  function clearCart() {
    items.value = []
  }

  return { items, cartCount, subtotal, addItem, removeItem, updateQuantity, clearCart }
}, {
  persist: true
})
