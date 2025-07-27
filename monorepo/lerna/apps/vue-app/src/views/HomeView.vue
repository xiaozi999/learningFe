<script setup>
import { Button, Card } from '@monorepo/ui'
import { capitalize, randomString, formatDate, getRelativeTime } from '@monorepo/utils'

// 演示工具函数
const demoString = 'hello world'
const capitalizedString = capitalize(demoString)
const randomStr = randomString(10)
const currentDate = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')
const relativeTime = getRelativeTime(Date.now() - 3600000) // 1小时前

// 定义alert函数
const showAlert = (message) => {
  alert(message)
}
</script>

<template>
  <main>
    <!-- Monorepo 功能演示 -->
    <div class="monorepo-demo">
      <h2>Monorepo 功能演示</h2>

      <!-- UI 组件演示 -->
      <Card class="demo-card">
        <template #header> UI 组件库演示 </template>

        <div class="button-demo">
          <Button variant="primary" size="large" @click="showAlert('Primary Button Clicked!')">
            主要按钮
          </Button>
          <Button variant="secondary" size="medium" @click="showAlert('Secondary Button Clicked!')">
            次要按钮
          </Button>
          <Button variant="danger" size="small" @click="showAlert('Danger Button Clicked!')">
            危险按钮
          </Button>
        </div>
      </Card>

      <!-- 工具函数演示 -->
      <Card class="demo-card">
        <template #header> 工具函数库演示 </template>

        <div class="utils-demo">
          <p><strong>原始字符串:</strong> {{ demoString }}</p>
          <p><strong>首字母大写:</strong> {{ capitalizedString }}</p>
          <p><strong>随机字符串:</strong> {{ randomStr }}</p>
          <p><strong>当前时间:</strong> {{ currentDate }}</p>
          <p><strong>相对时间:</strong> {{ relativeTime }}</p>
        </div>
      </Card>

      <!-- Monorepo 信息 -->
      <Card class="demo-card">
        <template #header> Monorepo 结构信息 </template>

        <div class="monorepo-info">
          <h4>项目结构:</h4>
          <ul>
            <li><code>apps/vue-app</code> - Vue 主应用</li>
            <li><code>packages/ui</code> - UI组件库</li>
            <li><code>packages/utils</code> - 工具函数库</li>
            <li><code>tools/</code> - 构建工具</li>
          </ul>

          <h4>可用命令:</h4>
          <ul>
            <li><code>pnpm dev</code> - 启动开发服务器</li>
            <li><code>pnpm build</code> - 构建项目</li>
            <li><code>pnpm build:all</code> - 构建所有包</li>
            <li><code>pnpm clean</code> - 清理依赖</li>
          </ul>

          <h4>Monorepo 优势:</h4>
          <ul>
            <li>代码共享和复用</li>
            <li>统一的依赖管理</li>
            <li>原子提交和版本控制</li>
            <li>简化的 CI/CD 流程</li>
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
