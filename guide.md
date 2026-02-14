# Guide: Clone Adeni Ile World & Build Full Ecommerce Site

This guide walks you through cloning [https://adeni-ile-world.lovable.app](https://adeni-ile-world.lovable.app) (Lovington Vision Int. Ltd — Yoruba Language Consulting & Sustainable Agriculture) and implementing a complete ecommerce experience using **Vite**, **Vue 3**, and **Tailwind CSS**.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Project Setup (Vite + Vue + Tailwind)](#2-project-setup-vite--vue--tailwind)
3. [Cloning the Website Design](#3-cloning-the-website-design)
4. [Project Structure for Ecommerce](#4-project-structure-for-ecommerce)
5. [Products Catalog](#5-products-catalog)
6. [Product Detail Page](#6-product-detail-page)
7. [Shopping Cart](#7-shopping-cart)
8. [Checkout Page](#8-checkout-page)
9. [State Management & Routing](#9-state-management--routing)
10. [Running & Deploying](#10-running--deploying)

---

## 1. Prerequisites

- **Node.js** 18+ and **npm** or **pnpm**
- Basic familiarity with Vue 3 (Composition API), Vue Router, and Tailwind CSS

Install Node from [nodejs.org](https://nodejs.org) if needed.

---

## 2. Project Setup (Vite + Vue + Tailwind)

### 2.1 Create the project

```bash
npm create vite@latest adeni-ile-world -- --template vue
cd adeni-ile-world
```

### 2.2 Install Tailwind CSS

```bash
npm install -D tailwindcss @tailwindcss/vite
```

### 2.3 Configure Tailwind with Vite

In `vite.config.js`, add the Tailwind plugin:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
```

### 2.4 Add Tailwind directives to your CSS

In `src/style.css` (or your main CSS file):

```css
@import "tailwindcss";
```

### 2.5 Install Vue Router (for ecommerce pages)

```bash
npm install vue-router
```

### 2.6 Optional: Pinia for cart/checkout state

```bash
npm install pinia
```

---

## 3. Cloning the Website Design

The live site is **Lovington Vision Int. Ltd** — Yoruba Language Consulting & Sustainable Agriculture. To clone it:

### 3.1 Inspect the original site

1. Open [https://adeni-ile-world.lovable.app](https://adeni-ile-world.lovable.app) in your browser.
2. Use DevTools (F12) to inspect:
   - **Layout**: header, hero, sections, footer.
   - **Colors & fonts**: copy hex colors and font families.
   - **Components**: navigation, buttons, cards, forms.

### 3.2 Recreate the layout

- **Header**: Logo, nav links (e.g. Home, Products, About, Contact), and a cart icon linking to `/cart`.
- **Hero**: Headline and subtext about Yoruba consulting & sustainable agriculture.
- **Sections**: About, services (consulting, agriculture), and a featured products preview.
- **Footer**: Company info, links, socials, copyright.

Use semantic HTML and Tailwind utility classes. Example structure:

```html
<!-- Example: Header -->
<header class="bg-emerald-900 text-white shadow-lg">
  <nav class="container mx-auto flex items-center justify-between px-4 py-4">
    <router-link to="/" class="text-xl font-bold">Lovington Vision</router-link>
    <div class="flex gap-6">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/cart" class="relative">
        Cart
        <span v-if="cartCount" class="absolute -top-2 -right-2 bg-amber-500 rounded-full text-xs px-1.5">{{ cartCount }}</span>
      </router-link>
    </div>
  </nav>
</header>
```

### 3.3 Theming

- Use a consistent palette (e.g. greens/browns for agriculture, accent for CTAs).
- Store theme tokens in Tailwind config if you need design tokens:

```js
// tailwind.config.js (if using config file)
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#065f46',
          accent: '#d97706',
        },
      },
    },
  },
}
```

---

## 4. Project Structure for Ecommerce

Suggested structure:

```
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   ├── product/
│   │   ├── ProductCard.vue
│   │   ├── ProductGrid.vue
│   │   └── ProductDetail.vue
│   ├── cart/
│   │   ├── CartItem.vue
│   │   ├── CartSummary.vue
│   │   └── CartDrawer.vue  (optional)
│   └── checkout/
│       └── CheckoutForm.vue
├── views/
│   ├── HomeView.vue
│   ├── ProductsView.vue      (catalog)
│   ├── ProductDetailView.vue
│   ├── CartView.vue
│   └── CheckoutView.vue
├── stores/
│   └── cart.js               (Pinia store)
├── router/
│   └── index.js
├── data/
│   └── products.js           (or API client)
├── App.vue
├── main.js
└── style.css
```

---

## 5. Products Catalog

### 5.1 Data source

Create `src/data/products.js` with an array of products (or replace later with an API):

```js
export const products = [
  {
    id: '1',
    slug: 'yoruba-language-basics',
    name: 'Yoruba Language Basics',
    description: 'Introductory Yoruba language consulting package.',
    price: 49.99,
    image: '/images/product-1.jpg',
    category: 'Consulting',
  },
  {
    id: '2',
    slug: 'sustainable-seed-pack',
    name: 'Sustainable Seed Pack',
    description: 'Curated seeds for sustainable agriculture.',
    price: 29.99,
    image: '/images/product-2.jpg',
    category: 'Agriculture',
  },
  // Add more products…
]
```

### 5.2 Catalog view and routing

- **Route**: `/products` → `ProductsView.vue`.
- **ProductsView**: Renders a grid of `ProductCard` components; each card shows image, name, price, and links to `/products/:slug` or `/products/:id`.

Example `ProductCard.vue` (concept):

```vue
<template>
  <router-link :to="`/products/${product.slug}`" class="block rounded-lg border bg-white shadow hover:shadow-md transition">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded-t-lg" />
    <div class="p-4">
      <h3 class="font-semibold">{{ product.name }}</h3>
      <p class="text-emerald-600 font-bold">${{ product.price.toFixed(2) }}</p>
    </div>
  </router-link>
</template>
<script setup>
defineProps({ product: Object })
</script>
```

- Support optional **filters** (e.g. by category) with a dropdown or tabs and a computed list.

---

## 6. Product Detail Page

### 6.1 Route

- `/products/:slug` or `/products/:id` → `ProductDetailView.vue`.

### 6.2 Implementation

- Resolve product by `route.params.slug` (or `id`) from your `products` array or API.
- Show: image(s), name, price, description, category, and an **“Add to cart”** button.
- “Add to cart” should call your cart store (e.g. `cartStore.addItem(product, quantity)`).

Example structure:

```vue
<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="product" class="grid md:grid-cols-2 gap-8">
      <img :src="product.image" :alt="product.name" class="rounded-lg shadow" />
      <div>
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>
        <p class="text-2xl text-emerald-600 mt-2">${{ product.price.toFixed(2) }}</p>
        <p class="mt-4 text-gray-600">{{ product.description }}</p>
        <div class="mt-6 flex items-center gap-4">
          <input v-model.number="qty" type="number" min="1" class="border rounded px-3 py-2 w-20" />
          <button @click="addToCart" class="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <p v-else class="text-center text-gray-500">Product not found.</p>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { products } from '@/data/products'

const route = useRoute()
const cartStore = useCartStore()
const qty = ref(1)

const product = computed(() => products.find(p => p.slug === route.params.slug))

function addToCart() {
  if (product.value) cartStore.addItem(product.value, qty.value)
}
</script>
```

---

## 7. Shopping Cart

### 7.1 Cart store (Pinia)

Create `src/stores/cart.js`:

```js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([]) // { product, quantity }

  const cartCount = computed(() => items.value.reduce((sum, i) => sum + i.quantity, 0))
  const subtotal = computed(() =>
    items.value.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  )

  function addItem(product, quantity = 1) {
    const existing = items.value.find(i => i.product.id === product.id)
    if (existing) existing.quantity += quantity
    else items.value.push({ product, quantity })
  }

  function removeItem(productId) {
    items.value = items.value.filter(i => i.product.id !== productId)
  }

  function updateQuantity(productId, quantity) {
    const item = items.value.find(i => i.product.id === productId)
    if (item) item.quantity = Math.max(0, quantity)
  }

  function clearCart() {
    items.value = []
  }

  return { items, cartCount, subtotal, addItem, removeItem, updateQuantity, clearCart }
})
```

### 7.2 Cart page

- **Route**: `/cart` → `CartView.vue`.
- List each line item (image, name, price, quantity, line total) with controls to update quantity or remove.
- Show **subtotal** (and optionally tax/shipping) and a button **“Proceed to checkout”** linking to `/checkout`.

Use `CartItem.vue` for each row and `CartSummary.vue` for totals. Bind quantity and remove to the cart store.

---

## 8. Checkout Page

### 8.1 Route and guard

- **Route**: `/checkout` → `CheckoutView.vue`.
- If cart is empty, redirect to `/products` or `/cart` using a route guard or a check in the view.

### 8.2 Checkout form

Collect:

- **Contact**: email, phone.
- **Shipping**: full name, address line 1 & 2, city, state/region, postal code, country.
- **Payment**: in a full implementation you’d integrate a payment provider (Stripe, PayPal, etc.). For the clone, you can show a “Payment method” section and a “Place order” button that:
  - Logs the order (e.g. payload to console or sends to a backend),
  - Clears the cart,
  - Redirects to a “Thank you” or order confirmation page.

### 8.3 Order summary

On the same page (e.g. sidebar or below form on mobile), show:

- List of items (name, qty, price).
- Subtotal, shipping (fixed or calculated), tax if applicable, **total**.

Bind totals to the cart store; keep form state in the view or a composable.

### 8.4 Validation

- Use Vue’s reactivity and simple checks (e.g. required fields, email format), or add a library like **VeeValidate** or **Vuelidate** for stronger validation and error messages.

---

## 9. State Management & Routing

### 9.1 Router setup

In `src/router/index.js` (or `main.js`):

```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/products', name: 'Products', component: () => import('@/views/ProductsView.vue') },
  { path: '/products/:slug', name: 'ProductDetail', component: () => import('@/views/ProductDetailView.vue') },
  { path: '/cart', name: 'Cart', component: () => import('@/views/CartView.vue') },
  { path: '/checkout', name: 'Checkout', component: () => import('@/views/CheckoutView.vue') },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
```

In `main.js`:

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
```

### 9.2 Checkout guard (optional)

```js
router.beforeEach((to, from, next) => {
  const cartStore = useCartStore()
  if (to.name === 'Checkout' && cartStore.cartCount === 0) {
    next({ name: 'Cart' })
  } else {
    next()
  }
})
```

(Import Pinia and get the store inside the guard as needed so the app is already created.)

---

## 10. Running & Deploying

### 10.1 Development

```bash
npm install
npm run dev
```

Open the URL shown (e.g. `http://localhost:5173`).

### 10.2 Build

```bash
npm run build
```

Output is in `dist/`. Serve with any static host.

### 10.3 Deploy

- **Vercel / Netlify**: Connect the repo and set build command `npm run build` and publish directory `dist`.
- **GitHub Pages**: Use a workflow that runs `npm run build` and deploys `dist`.

---

## Quick Checklist

| Task | Done |
|------|------|
| Vite + Vue + Tailwind project created | ☐ |
| Vue Router and Pinia installed and wired | ☐ |
| Header/Footer and home layout cloned from adeni-ile-world | ☐ |
| Products data and catalog page (`/products`) | ☐ |
| Product detail page (`/products/:slug`) and Add to cart | ☐ |
| Cart store (add, remove, update quantity) | ☐ |
| Cart page (`/cart`) with summary | ☐ |
| Checkout page (`/checkout`) with form and order summary | ☐ |
| Empty-cart redirect for checkout | ☐ |
| Place order → clear cart → thank you page | ☐ |

---

## References

- [Vite](https://vitejs.dev/)
- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Original site: [https://adeni-ile-world.lovable.app](https://adeni-ile-world.lovable.app)

Once you have this structure in place, you can refine styling to match the live site pixel-perfect and plug in a real backend and payment provider for production.
