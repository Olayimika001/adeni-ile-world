<script setup>
</script>

<template>
  <footer class="bg-primary text-primary-foreground mt-auto">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company -->
        <div>
          <h3 class="text-lg font-semibold text-secondary mb-3">Lovington Vision Int. Ltd</h3>
          <p class="text-primary-foreground/90 text-sm leading-relaxed">
            Yoruba language consulting and sustainable agriculture for communities and businesses.
          </p>
        </div>
        <!-- Links -->
        <div>
          <h3 class="text-lg font-semibold text-secondary mb-3">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/" class="hover:text-secondary transition-colors">Home</router-link>
            </li>
            <li>
              <router-link to="/products" class="hover:text-secondary transition-colors">Products</router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-secondary transition-colors">About</router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-secondary transition-colors">Contact</router-link>
            </li>
            <li>
              <router-link to="/cart" class="hover:text-secondary transition-colors">Cart</router-link>
            </li>
          </ul>
        </div>
        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold text-secondary mb-3">Contact</h3>
          <p class="text-sm text-primary-foreground/90">
            Adeni Ile World<br />
            Yoruba Consulting & Sustainable Agriculture
          </p>
          <div class="mt-3 flex gap-4">
            <a
              href="#"
              class="text-primary-foreground hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="#"
              class="text-primary-foreground hover:text-secondary transition-colors"
              aria-label="Twitter"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href="#"
              class="text-primary-foreground hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-primary/40 mt-8 pt-6 text-center text-sm text-primary-foreground/80">
        &copy; {{ new Date().getFullYear() }} Lovington Vision Int. Ltd. All rights reserved.
      </div>
    </div>
  </footer>
</template>
