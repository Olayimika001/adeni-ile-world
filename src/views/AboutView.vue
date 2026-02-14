<script setup>
import aboutHero from '@/assets/about page.jpeg'
</script>

<template>
  <div class="bg-background">
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        :src="aboutHero"
        alt="Scenic farmland and sky at dawn"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 hero-overlay"></div>
      <div class="relative z-10 container mx-auto px-4 text-center">
        <p class="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary-foreground/80 mb-3">
          Ẹ ku abọ̀ — Welcome
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Lovington Vision</h1>
        <p class="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
          Bridging cultures through language and nurturing the earth through sustainable agriculture.
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p class="text-lg text-gray-700 mb-6">
              To empower communities by preserving the richness of the Yoruba language and promoting sustainable farming practices that honor the land and feed the future.
            </p>
            <h2 class="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
            <p class="text-lg text-gray-700">
              A world where cultural heritage thrives alongside ecological harmony, creating resilience and prosperity for generations to come.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-primary/10 p-6 rounded-lg text-center transform translate-y-8">
              <div class="text-4xl mb-4">🌍</div>
              <h3 class="font-bold text-foreground">Culture</h3>
            </div>
            <div class="bg-secondary/20 p-6 rounded-lg text-center">
              <div class="text-4xl mb-4">🌱</div>
              <h3 class="font-bold text-foreground">Growth</h3>
            </div>
            <div class="bg-secondary/20 p-6 rounded-lg text-center transform translate-y-8">
              <div class="text-4xl mb-4">🤝</div>
              <h3 class="font-bold text-foreground">Community</h3>
            </div>
            <div class="bg-primary/10 p-6 rounded-lg text-center">
              <div class="text-4xl mb-4">💡</div>
              <h3 class="font-bold text-foreground">Innovation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- By the Numbers -->
    <section class="py-10 bg-card border-y border-border">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          <div class="bg-background rounded-lg p-6 border border-border">
            <div class="text-3xl font-bold text-foreground">200+</div>
            <p class="text-sm text-muted-foreground mt-1">Clients Served</p>
          </div>
          <div class="bg-background rounded-lg p-6 border border-border">
            <div class="text-3xl font-bold text-foreground">15+</div>
            <p class="text-sm text-muted-foreground mt-1">Years Combined Experience</p>
          </div>
          <div class="bg-background rounded-lg p-6 border border-border">
            <div class="text-3xl font-bold text-foreground">25ha</div>
            <p class="text-sm text-muted-foreground mt-1">Cultivated Farmland</p>
          </div>
          <div class="bg-background rounded-lg p-6 border border-border">
            <div class="text-3xl font-bold text-foreground">100%</div>
            <p class="text-sm text-muted-foreground mt-1">Sustainable Practices</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-foreground text-center mb-12">What We Do</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Consulting -->
          <div class="bg-white border border-primary/20 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mb-6">
              📖
            </div>
            <h3 class="text-xl font-bold text-foreground mb-4">Language Consulting</h3>
            <p class="text-gray-600 mb-6">
              Expert guidance in Yoruba language, translation services, and cultural education programs for individuals and organizations.
            </p>
            <router-link to="/products" class="text-primary font-medium hover:opacity-90 flex items-center gap-1">
              Explore Services <span>→</span>
            </router-link>
          </div>

          <!-- Agriculture -->
          <div class="bg-white border border-primary/20 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-3xl mb-6">
              🌱
            </div>
            <h3 class="text-xl font-bold text-foreground mb-4">Sustainable Agriculture</h3>
            <p class="text-gray-600 mb-6">
              Eco-friendly farming solutions, crop management advice, and high-quality produce grown with care for the environment.
            </p>
            <router-link to="/products" class="text-primary font-medium hover:opacity-90 flex items-center gap-1">
              View Products <span>→</span>
            </router-link>
          </div>

          <!-- Aquaculture -->
          <div class="bg-white border border-primary/20 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-6">
              🐟
            </div>
            <h3 class="text-xl font-bold text-foreground mb-4">Modern Aquaculture</h3>
            <p class="text-gray-600 mb-6">
              Advanced fish farming techniques, quality fingerlings, and setup consultation for aspiring fish farmers.
            </p>
            <router-link to="/products" class="text-primary font-medium hover:opacity-90 flex items-center gap-1">
              Learn More <span>→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-16 bg-primary/5">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p class="text-lg text-gray-700 mb-8 leading-relaxed">
            Founded with a passion for preservation and growth, Lovington Vision began as a small initiative to keep the Yoruba language alive for younger generations in the diaspora. As we reconnected with our roots, we rediscovered the vital importance of the land itself.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            Today, we stand at the intersection of cultural and agricultural sustainability. We believe that knowing where you come from is just as important as knowing where your food comes from. Our integrated approach serves to nourish both the mind and the body.
          </p>
          <router-link 
            to="/contact" 
            class="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-colors shadow-md"
          >
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
