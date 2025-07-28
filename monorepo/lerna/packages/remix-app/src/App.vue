<script>
import { Header as AppHeader } from '@monorepo/header'
import { Footer as AppFooter } from '@monorepo/footer'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      navItems: [
        { path: '/', label: '首页', active: true },
        { path: '/about', label: '关于', active: false },
        { path: '/contact', label: '联系', active: false },
        { path: '/docs', label: '文档', active: false },
      ],
      footerLinks: [
        { label: '首页', url: '/' },
        { label: '关于', url: '/about' },
        { label: '联系', url: '/contact' },
        { label: '文档', url: '/docs' },
        { label: '隐私政策', url: '/privacy' },
      ],
    }
  },
}
</script>

<template>
  <div id="app">
    <AppHeader title="Remix App" :nav-items="navItems" />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter
      title="Remix App"
      description="A modern Remix application built with Vue.js"
      copyright-text="Remix Team"
      :links="footerLinks"
    />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
