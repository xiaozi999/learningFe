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
        { path: '/users', label: '用户管理', active: false },
        { path: '/settings', label: '系统设置', active: false },
        { path: '/reports', label: '报表', active: false },
      ],
      footerLinks: [
        { label: '首页', url: '/' },
        { label: '用户管理', url: '/users' },
        { label: '系统设置', url: '/settings' },
        { label: '报表', url: '/reports' },
        { label: '帮助', url: '/help' },
      ],
    }
  },
}
</script>

<template>
  <div id="app">
    <AppHeader title="Admin Dashboard" :nav-items="navItems" />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter
      title="Admin Dashboard"
      description="Administrative interface for the monorepo"
      copyright-text="Admin Team"
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
