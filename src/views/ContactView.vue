<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const showSuccess = ref(false)
const submitError = ref('')

function validateEmail(email) {
  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  return re.test(email)
}

function validateForm() {
  const newErrors = {}

  if (!formData.value.name) newErrors.name = 'Name is required'
  
  if (!formData.value.email) {
    newErrors.email = 'Email is required'
  } else if (!validateEmail(formData.value.email)) {
    newErrors.email = 'Please enter a valid email'
  }

  if (!formData.value.subject) newErrors.subject = 'Subject is required'
  if (!formData.value.message) newErrors.message = 'Message is required'

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

async function handleSubmit() {
  submitError.value = ''
  showSuccess.value = false

  if (!validateForm()) return

  isSubmitting.value = true

  try {
    const contactData = {
      ...formData.value,
      timestamp: new Date().toISOString()
    }

    const response = await fetch('http://localhost:3001/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    })

    if (!response.ok) throw new Error('Failed to send message')

    // Success handling
    showSuccess.value = true
    formData.value = { name: '', email: '', subject: '', message: '' }
    errors.value = {}
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)

  } catch (err) {
    console.error('Contact submission error:', err)
    submitError.value = 'Failed to send message. Please ensure the API server is running.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-background min-h-screen py-12">
    <div class="container mx-auto px-4">
      <!-- Header -->
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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Contact Information -->
        <div class=" space-y-5 max-w-3xl mx-auto">
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

        <!-- Contact Form -->
        <div class="md:col-span-2">
          <div class="bg-white p-8 rounded-xl shadow-sm border border-primary/20">
            <h2 class="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            
            <div v-if="showSuccess" class="mb-6 p-4 bg-primary/5 border border-primary/30 text-foreground rounded-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Message sent successfully! We'll get back to you soon.
            </div>

            <div v-if="submitError" class="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {{ submitError }}
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    id="name"
                    v-model="formData.name"
                    type="text"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    :class="{ 'border-red-500': errors.name }"
                    placeholder="Your Name"
                  >
                  <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    :class="{ 'border-red-500': errors.email }"
                    placeholder="your@email.com"
                  >
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  :class="{ 'border-red-500': errors.subject }"
                  placeholder="How can we help?"
                >
                <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  :class="{ 'border-red-500': errors.message }"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
              </div>

              <button 
                type="submit" 
                class="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-primary/20 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
