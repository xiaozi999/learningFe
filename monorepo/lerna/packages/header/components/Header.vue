<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <h1>{{ title }}</h1>
      </div>
      <nav class="navigation">
        <slot name="navigation">
          <Navigation :items="defaultNavItems" />
        </slot>
      </nav>
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Header',
  components: {
    Navigation,
  },
  props: {
    title: {
      type: String,
      default: 'Monorepo App',
    },
    navItems: {
      type: Array,
      default: null,
    },
  },
  computed: {
    defaultNavItems() {
      return (
        this.navItems || [
          { path: '/', label: '首页', active: true },
          { path: '/about', label: '关于', active: false },
          { path: '/contact', label: '联系', active: false },
        ]
      )
    },
  },
}
</script>

<style scoped>
.header {
  background: #2c3e50;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.navigation {
  display: flex;
  gap: 1rem;
}
</style>
