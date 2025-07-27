<template>
  <div class="ui-card">
    <div v-if="$slots.header" class="ui-card-header">
      <slot name="header"></slot>
    </div>
    <div class="ui-card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="ui-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
// 无需额外逻辑
</script>

<style scoped>
.ui-card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.ui-card-header {
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
  font-weight: 600;
}

.ui-card-body {
  padding: 16px;
}

.ui-card-footer {
  padding: 16px;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
}
</style>
