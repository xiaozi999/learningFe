<template>
  <button :class="['ui-button', variant, size]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})

defineEmits(['click'])
</script>

<style scoped>
.ui-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.ui-button.primary {
  background-color: #4f46e5;
  color: white;
}

.ui-button.secondary {
  background-color: #6b7280;
  color: white;
}

.ui-button.danger {
  background-color: #dc2626;
  color: white;
}

.ui-button.small {
  padding: 6px 12px;
  font-size: 12px;
}

.ui-button.medium {
  padding: 8px 16px;
  font-size: 14px;
}

.ui-button.large {
  padding: 12px 24px;
  font-size: 16px;
}

.ui-button:hover {
  opacity: 0.8;
}
</style>