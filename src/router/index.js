import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Home - Adeni Ile World' }
  },
  { 
    path: '/products', 
    name: 'Products', 
    component: () => import('@/views/ProductsView.vue'),
    meta: { title: 'Products - Adeni Ile World' }
  },
  { 
    path: '/cart', 
    name: 'Cart', 
    component: () => import('@/views/CartView.vue'),
    meta: { title: 'Shopping Cart - Adeni Ile World' }
  },
  { 
    path: '/checkout', 
    name: 'Checkout', 
    component: () => import('@/views/CheckoutView.vue'),
    meta: { title: 'Checkout - Adeni Ile World', requiresCart: true }
  },
  { 
    path: '/order-confirmation', 
    name: 'OrderConfirmation', 
    component: () => import('@/views/OrderConfirmationView.vue'),
    meta: { title: 'Order Confirmation - Adeni Ile World' }
  },
  { 
    path: '/about', 
    name: 'About', 
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About - Adeni Ile World' }
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Contact - Adeni Ile World' }
  },
  { 
    path: '/products/:slug', 
    name: 'ProductDetail', 
    component: () => import('@/views/ProductDetailView.vue'),
    meta: { title: 'Product Details - Adeni Ile World' }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (browser back/forward), use it
    if (savedPosition) {
      return savedPosition
    }
    // If navigating to a hash anchor, scroll to it
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    // Otherwise, scroll to top
    return { top: 0, behavior: 'smooth' }
  },
})

// Navigation guard for checkout route
router.beforeEach(async (to, from, next) => {
  // Dynamically import the cart store only when needed
  if (to.meta.requiresCart) {
    const { useCartStore } = await import('@/stores/cart')
    const cartStore = useCartStore()
    
    // Redirect to cart if trying to access checkout with empty cart
    if (cartStore.cartCount === 0) {
      next({ name: 'Cart' })
      return
    }
  }
  
  // Update page title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  next()
})

export default router
