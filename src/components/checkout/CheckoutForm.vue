<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      email: '',
      phone: '',
      fullName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '',
      paymentMethod: 'credit-card',
    }),
  },
})

const emit = defineEmits(['update:modelValue', 'submit'])

const errors = ref({})

const formData = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

function updateField(field, value) {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
  // Clear error when user starts typing
  if (errors.value[field]) {
    delete errors.value[field]
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validateForm() {
  const newErrors = {}

  // Contact validation
  if (!formData.value.email) {
    newErrors.email = 'Email is required'
  } else if (!validateEmail(formData.value.email)) {
    newErrors.email = 'Please enter a valid email'
  }

  if (!formData.value.phone) {
    newErrors.phone = 'Phone number is required'
  }

  // Shipping validation
  if (!formData.value.fullName) {
    newErrors.fullName = 'Full name is required'
  }

  if (!formData.value.address1) {
    newErrors.address1 = 'Address is required'
  }

  if (!formData.value.city) {
    newErrors.city = 'City is required'
  }

  if (!formData.value.state) {
    newErrors.state = 'State/Region is required'
  }

  if (!formData.value.country) {
    newErrors.country = 'Country is required'
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

function handleSubmit() {
  if (validateForm()) {
    emit('submit', formData.value)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-8">
    <!-- Contact Information -->
    <div class="bg-white border border-primary/20 rounded-lg p-6">
      <h2 class="text-xl font-bold text-foreground mb-4">Contact Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email <span class="text-red-500">*</span>
          </label>
          <input
            id="email"
            :value="formData.email"
            @input="updateField('email', $event.target.value)"
            type="email"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
            Phone <span class="text-red-500">*</span>
          </label>
          <input
            id="phone"
            :value="formData.phone"
            @input="updateField('phone', $event.target.value)"
            type="tel"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            :class="{ 'border-red-500': errors.phone }"
          />
          <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
        </div>
      </div>
    </div>

    <!-- Shipping Address -->
    <div class="bg-white border border-primary/20 rounded-lg p-6">
      <h2 class="text-xl font-bold text-foreground mb-4">Shipping Address</h2>
      <div class="space-y-4">
        <div>
          <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span class="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            :value="formData.fullName"
            @input="updateField('fullName', $event.target.value)"
            type="text"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            :class="{ 'border-red-500': errors.fullName }"
          />
          <p v-if="errors.fullName" class="mt-1 text-sm text-red-600">{{ errors.fullName }}</p>
        </div>

        <div>
          <label for="address1" class="block text-sm font-medium text-gray-700 mb-1">
            Address Line 1 <span class="text-red-500">*</span>
          </label>
          <input
            id="address1"
            :value="formData.address1"
            @input="updateField('address1', $event.target.value)"
            type="text"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            :class="{ 'border-red-500': errors.address1 }"
          />
          <p v-if="errors.address1" class="mt-1 text-sm text-red-600">{{ errors.address1 }}</p>
        </div>

        <div>
          <label for="address2" class="block text-sm font-medium text-gray-700 mb-1">
            Address Line 2 (Optional)
          </label>
          <input
            id="address2"
            :value="formData.address2"
            @input="updateField('address2', $event.target.value)"
            type="text"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="city" class="block text-sm font-medium text-gray-700 mb-1">
              City <span class="text-red-500">*</span>
            </label>
            <input
              id="city"
              :value="formData.city"
              @input="updateField('city', $event.target.value)"
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              :class="{ 'border-red-500': errors.city }"
            />
            <p v-if="errors.city" class="mt-1 text-sm text-red-600">{{ errors.city }}</p>
          </div>

          <div>
            <label for="state" class="block text-sm font-medium text-gray-700 mb-1">
              State/Region <span class="text-red-500">*</span>
            </label>
            <input
              id="state"
              :value="formData.state"
              @input="updateField('state', $event.target.value)"
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              :class="{ 'border-red-500': errors.state }"
            />
            <p v-if="errors.state" class="mt-1 text-sm text-red-600">{{ errors.state }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="postalCode" class="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              id="postalCode"
              :value="formData.postalCode"
              @input="updateField('postalCode', $event.target.value)"
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              :class="{ 'border-red-500': errors.postalCode }"
            />
            <p v-if="errors.postalCode" class="mt-1 text-sm text-red-600">{{ errors.postalCode }}</p>
          </div>

          <div>
            <label for="country" class="block text-sm font-medium text-gray-700 mb-1">
              Country <span class="text-red-500">*</span>
            </label>
            <input
              id="country"
              :value="formData.country"
              @input="updateField('country', $event.target.value)"
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              :class="{ 'border-red-500': errors.country }"
            />
            <p v-if="errors.country" class="mt-1 text-sm text-red-600">{{ errors.country }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Method -->
    <div class="bg-white border border-primary/20 rounded-lg p-6">
      <h2 class="text-xl font-bold text-foreground mb-4">Payment Method</h2>
      <div class="space-y-3">
        <div class="flex items-center">
          <input
            id="credit-card"
            :checked="formData.paymentMethod === 'credit-card'"
            @change="updateField('paymentMethod', 'credit-card')"
            type="radio"
            name="payment"
            class="w-4 h-4 text-primary focus:ring-primary"
          />
          <label for="credit-card" class="ml-3 text-gray-700">Credit Card (Payment integration coming soon)</label>
        </div>
        <div class="flex items-center">
          <input
            id="paypal"
            :checked="formData.paymentMethod === 'paypal'"
            @change="updateField('paymentMethod', 'paypal')"
            type="radio"
            name="payment"
            class="w-4 h-4 text-primary focus:ring-primary"
          />
          <label for="paypal" class="ml-3 text-gray-700">PayPal (Payment integration coming soon)</label>
        </div>
      </div>
      <p class="mt-4 text-sm text-gray-500">
        Note: This is a demo checkout. No actual payment will be processed.
      </p>
    </div>

    <!-- Submit Button -->
    <div>
      <button
        type="submit"
        class="w-full px-6 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition shadow-md hover:shadow-lg"
      >
        Place Order
      </button>
    </div>
  </form>
</template>
