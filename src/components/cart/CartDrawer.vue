<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="absolute inset-0 bg-black/50"
        @click="$emit('close')"
      />
      <aside
        class="relative w-full max-w-sm bg-white shadow-xl ml-auto flex flex-col"
      >
        <div class="p-4 border-b flex items-center justify-between">
          <h2 class="text-lg font-semibold text-emerald-900">Cart</h2>
          <button
            type="button"
            class="p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
            @click="$emit('close')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div class="flex-1 overflow-auto p-4">
          <slot />
        </div>
      </aside>
    </div>
  </Teleport>
</template>
