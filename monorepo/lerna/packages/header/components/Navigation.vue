<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li v-for="item in items" :key="item.path" class="nav-item">
        <a :href="item.path" class="nav-link" :class="{ active: item.active }">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    items: {
      type: Array,
      default: () => [
        { path: '/', label: '首页', active: true },
        { path: '/about', label: '关于', active: false },
        { path: '/contact', label: '联系', active: false },
      ],
    },
  },
}
</script>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;
  display: block;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
}
</style>
