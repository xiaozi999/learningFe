<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
        <div class="footer-section">
          <slot name="links">
            <FooterLinks :links="defaultLinks" />
          </slot>
        </div>
        <div class="footer-section">
          <slot name="social">
            <div class="social-links">
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">LinkedIn</a>
            </div>
          </slot>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} {{ copyrightText }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLinks from './FooterLinks.vue'

export default {
  name: 'Footer',
  components: {
    FooterLinks,
  },
  props: {
    title: {
      type: String,
      default: 'Monorepo App',
    },
    description: {
      type: String,
      default: 'A modern monorepo built with Lerna and Vue.js',
    },
    copyrightText: {
      type: String,
      default: 'Monorepo Team',
    },
    links: {
      type: Array,
      default: null,
    },
  },
  computed: {
    defaultLinks() {
      return (
        this.links || [
          { label: '首页', url: '/' },
          { label: '关于', url: '/about' },
          { label: '联系', url: '/contact' },
          { label: '隐私政策', url: '/privacy' },
        ]
      )
    },
  },
}
</script>

<style scoped>
.footer {
  background: #34495e;
  color: white;
  padding: 2rem 0 1rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
}

.footer-section p {
  margin: 0;
  line-height: 1.6;
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  transition: all 0.3s;
}

.social-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  opacity: 0.7;
  font-size: 0.9rem;
}
</style>
