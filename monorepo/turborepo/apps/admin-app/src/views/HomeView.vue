<script setup>
import { Button, Card } from '@monorepo/ui'
import { capitalize, randomString, formatDate, getRelativeTime } from '@monorepo/utils'

const demoString = 'admin panel'
const capitalizedString = capitalize(demoString)
const randomStr = randomString(10)
const currentDate = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')
const relativeTime = getRelativeTime(Date.now() - 7200000) // 2小时前

const showAlert = (message) => {
  alert(message)
}
</script>

<template>
  <main>
    <div class="monorepo-demo">
      <h2>Admin 后台管理项目（Monorepo 演示）</h2>
      <p>这是后台管理项目，演示 monorepo 多项目结构和包复用。</p>

      <Card class="demo-card">
        <template #header>
          UI 组件库演示
        </template>
        <div class="button-demo">
          <Button variant="primary" size="large" @click="showAlert('Admin Primary!')">
            管理主按钮
          </Button>
          <Button variant="secondary" size="medium" @click="showAlert('Admin Secondary!')">
            管理次按钮
          </Button>
        </div>
      </Card>

      <Card class="demo-card">
        <template #header>
          工具函数库演示
        </template>
        <div class="utils-demo">
          <p><strong>原始字符串:</strong> {{ demoString }}</p>
          <p><strong>首字母大写:</strong> {{ capitalizedString }}</p>
          <p><strong>随机字符串:</strong> {{ randomStr }}</p>
          <p><strong>当前时间:</strong> {{ currentDate }}</p>
          <p><strong>相对时间:</strong> {{ relativeTime }}</p>
        </div>
      </Card>

      <Card class="demo-card">
        <template #header>
          Monorepo 结构信息
        </template>
        <div class="monorepo-info">
          <h4>项目结构:</h4>
          <ul>
            <li><code>apps/vue-app</code> - Vue 主应用</li>
            <li><code>apps/admin-app</code> - 后台管理项目</li>
            <li><code>packages/ui</code> - UI组件库</li>
            <li><code>packages/utils</code> - 工具函数库</li>
          </ul>
        </div>
      </Card>
    </div>
  </main>
</template>

<style scoped>
.monorepo-demo {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.demo-card {
  margin-bottom: 2rem;
}

.button-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.utils-demo p {
  margin: 0.5rem 0;
}

.monorepo-info ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.monorepo-info li {
  margin: 0.25rem 0;
}

code {
  background: #f1f5f9;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}
</style>
