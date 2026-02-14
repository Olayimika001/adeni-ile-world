<script setup>
import { useRouter } from "vue-router";
import { products } from "@/data/products";

const router = useRouter();

const features = [
  {
    title: "Yoruba Language Consulting",
    description:
      "Expert guidance in Yoruba language for business, education, and cultural projects. Preserving indigenous knowledge and connecting communities.",
    icon: "📖",
  },
  {
    title: "Livestock, Crops & Organic Agriculture",
    description:
      "Sustainable livestock and crop farming with organic practices. Nurturing the land and supporting local food systems in Ibadan and beyond.",
    icon: "🌱",
  },
  {
    title: "Aquaculture & Premium Smoked Fish",
    description:
      "Quality aquaculture and premium smoked fish, produced with care. Part of our commitment to sustainable, traditional food practices.",
    icon: "🐟",
  },
];

const featuredProducts = products.slice(0, 3);

function goToProducts() {
  router.push("/products");
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero – aligned with https://adeni-ile-world.lovable.app -->
    <section
      id="home"
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        alt="Lush African farmland at golden hour"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 hero-overlay"></div>
      <div class="relative z-10 container mx-auto px-4 text-center">
        <p
          class="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary-foreground/70 mb-4"
        >
          Yoruba Language Consultant · Farmer · Artisan
        </p>
        <h1
          class="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Rooted in
          <span class="italic text-secondary">Culture</span>,<br />Growing with
          <span class="italic text-secondary">Nature</span>
        </h1>
        <p
          class="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Preserving indigenous Yoruba knowledge while nurturing the land — from
          livestock and crops to premium smoked fish, delivered with passion.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <router-link
            to="/products"
            class="inline-block px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >Explore</router-link
          ><router-link
            to="/contact"
            class="inline-block px-8 py-3.5 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >Get In Touch</router-link
          >
        </div>
      </div>
    </section>

    <!-- About – matches site meta description -->
    <section id="about" class="py-24 bg-background">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <p
            class="font-body text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-3"
          >
            Ẹ ku abọ̀ — Welcome
          </p>
          <h2
            class="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Where Language Meets the Land
          </h2>
          <div class="section-divider w-24 mx-auto mb-8"></div>
          <p class="font-body text-lg text-muted-foreground leading-relaxed">
            I am a passionate Yoruba language consultant dedicated to preserving
            indigenous knowledge systems. Alongside my linguistic work, I run a
            thriving agricultural enterprise rooted in sustainable practices —
            raising livestock, cultivating crops, and producing the finest
            smoked fish using time-honoured traditions.
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-card rounded-xl p-8 border border-border">
            <div
              class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-open text-primary"
              >
                <path d="M12 7v14"></path>
                <path
                  d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
                ></path>
              </svg>
            </div>
            <h3 class="font-heading text-xl font-bold text-foreground mb-3">
              Yoruba Language Consulting
            </h3>
            <p class="font-body text-muted-foreground leading-relaxed">
              Offering translation, cultural education, and advisory services to
              help organisations and individuals engage authentically with
              Yoruba language and heritage. Preserving the beauty of Èdè Yorùbá
              for future generations.
            </p>
          </div>
          <div class="bg-card rounded-xl p-8 border border-border">
            <div
              class="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-sprout text-secondary"
              >
                <path d="M7 20h10"></path>
                <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
                <path
                  d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
                ></path>
                <path
                  d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
                ></path>
              </svg>
            </div>
            <h3 class="font-heading text-xl font-bold text-foreground mb-3">
              Agriculture &amp; Farming
            </h3>
            <p class="font-body text-muted-foreground leading-relaxed">
              From cattle and poultry to maize and vegetables, our farm embraces
              diverse, sustainable methods. We combine traditional knowledge
              with modern practices to produce wholesome food for our
              communities.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer – services from live site -->
    <section id="services" class="py-24 bg-card">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <p
            class="font-body text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-3"
          >
            What We Do
          </p>
          <h2
            class="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Our Agricultural Services
          </h2>
          <div class="section-divider w-24 mx-auto"></div>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            class="group bg-background rounded-xl p-7 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-beef text-primary"
              >
                <circle cx="12.5" cy="8.5" r="2.5"></circle>
                <path
                  d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"
                ></path>
                <path
                  d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
                ></path>
              </svg>
            </div>
            <h3 class="font-heading text-lg font-bold text-foreground mb-2">
              Livestock Farming
            </h3>
            <p class="font-body text-sm text-muted-foreground leading-relaxed">
              Raising cattle, poultry, pigs, and other animals with care, using
              both traditional and modern husbandry techniques.
            </p>
          </div>
          <div
            class="group bg-background rounded-xl p-7 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-wheat text-primary"
              >
                <path d="M2 22 16 8"></path>
                <path
                  d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
                ></path>
                <path
                  d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
                ></path>
                <path
                  d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
                ></path>
                <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path>
                <path
                  d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
                ></path>
                <path
                  d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
                ></path>
                <path
                  d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
                ></path>
              </svg>
            </div>
            <h3 class="font-heading text-lg font-bold text-foreground mb-2">
              Crop Farming
            </h3>
            <p class="font-body text-sm text-muted-foreground leading-relaxed">
              Growing maize, vegetables, and staple crops on fertile land,
              ensuring quality produce from seed to harvest.
            </p>
          </div>
          <div
            class="group bg-background rounded-xl p-7 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-layers text-primary"
              >
                <path
                  d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                ></path>
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
              </svg>
            </div>
            <h3 class="font-heading text-lg font-bold text-foreground mb-2">
              Mixed Farming
            </h3>
            <p class="font-body text-sm text-muted-foreground leading-relaxed">
              Integrating livestock and crop production for a balanced,
              sustainable farm ecosystem that maximises yield.
            </p>
          </div>
          <div
            class="group bg-background rounded-xl p-7 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-leaf text-primary"
              >
                <path
                  d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                ></path>
                <path
                  d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                ></path>
              </svg>
            </div>
            <h3 class="font-heading text-lg font-bold text-foreground mb-2">
              Organic Farming
            </h3>
            <p class="font-body text-sm text-muted-foreground leading-relaxed">
              Using natural methods free of synthetic chemicals — composting,
              crop rotation, and biological pest control.
            </p>
          </div>
          <div
            class="group bg-background rounded-xl p-7 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-fish text-primary"
              >
                <path
                  d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
                ></path>
                <path d="M18 12v.5"></path>
                <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path>
                <path
                  d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
                ></path>
                <path
                  d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"
                ></path>
                <path
                  d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"
                ></path>
              </svg>
            </div>
            <h3 class="font-heading text-lg font-bold text-foreground mb-2">
              Aquaculture
            </h3>
            <p class="font-body text-sm text-muted-foreground leading-relaxed">
              Farming fish and aquatic species in controlled environments,
              producing fresh, healthy protein sources year-round.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 md:py-24 bg-white" id="products">
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-foreground">
            Featured Products
          </h2>
          <router-link
            to="/products"
            class="text-secondary font-semibold hover:opacity-90 transition"
          >
            View all products →
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="group border border-primary/20 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
          >
            <div
              class="aspect-4/3 bg-primary/5 flex items-center justify-center text-4xl text-primary/40"
            >
              <img
                v-if="product.image"
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover"
              />
              <span v-else>{{
                product.category === "Consulting" ? "📖" : "🌱"
              }}</span>
            </div>
            <div class="p-4">
              <span
                class="text-xs font-medium text-secondary uppercase tracking-wide"
                >{{ product.category }}</span
              >
              <h3
                class="mt-1 font-semibold text-foreground group-hover:text-secondary transition"
              >
                {{ product.name }}
              </h3>
              <p class="mt-2 text-primary font-bold">
                {{ new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(product.price) }}
              </p>
              <router-link
                :to="`/products/${product.slug}`"
                class="mt-3 inline-block text-sm font-medium text-secondary hover:opacity-90"
              >
                View details →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- contact  -->
    <section id="contact" class="py-24 bg-card">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center mb-16">
          <p
            class="font-body text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-3"
          >
            Ẹ bá wa sọ̀rọ̀ — Let's Talk
          </p>
          <h2
            class="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Get In Touch
          </h2>
          <div class="section-divider w-24 mx-auto mb-6"></div>
          <p class="font-body text-muted-foreground">
            Whether you need Yoruba language consulting, want to order smoked
            fish, or explore our farm services — we'd love to hear from you.
          </p>
        </div>
        <div class="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div
            class="bg-background rounded-xl p-6 border border-border text-center"
          >
            <div
              class="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone text-primary"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
            </div>
            <h4 class="font-heading text-sm font-bold text-foreground mb-1">
              Phone
            </h4>
            <p class="font-body text-sm text-muted-foreground">
              08028240078<br />08030819828
            </p>
          </div>
          <div
            class="bg-background rounded-xl p-6 border border-border text-center"
          >
            <div
              class="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail text-primary"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h4 class="font-heading text-sm font-bold text-foreground mb-1">
              Email
            </h4>
            <p class="font-body text-sm text-muted-foreground">
              lovingtonvision1@gmail.com
            </p>
          </div>
          <div
            class="bg-background rounded-xl p-6 border border-border text-center"
          >
            <div
              class="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin text-primary"
              >
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h4 class="font-heading text-sm font-bold text-foreground mb-1">
              Location
            </h4>
            <p class="font-body text-sm text-muted-foreground">
              Lagos, Ogun, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
