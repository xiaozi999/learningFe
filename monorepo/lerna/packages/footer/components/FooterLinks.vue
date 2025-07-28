<template>
  <div class="footer-links">
    <h4>快速链接</h4>
    <ul class="links-list">
      <li v-for="link in links" :key="link.url" class="link-item">
        <a :href="link.url" class="link">{{ link.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks',
  props: {
    links: {
      type: Array,
      default: () => [
        { label: '首页', url: '/' },
        { label: '关于', url: '/about' },
        { label: '联系', url: '/contact' },
        { label: '隐私政策', url: '/privacy' },
      ],
    },
  },
}
</script>

<style scoped>
.footer-links h4 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.links-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.link-item {
  margin-bottom: 0.5rem;
}

.link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s;
}

.link:hover {
  color: white;
}
</style>
