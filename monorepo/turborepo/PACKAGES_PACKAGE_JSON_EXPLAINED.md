# 包的 package.json 配置详解

## 文件概述

包的 `package.json` 文件定义了内部包的配置，包括导出、依赖关系和构建脚本。

## UI 包配置 (packages/ui/package.json)

### 基础信息
```json
{
  "name": "@monorepo/ui",              // 包名称，使用 scope
  "version": "1.0.0",                  // 版本号
  "type": "module",                    // ES 模块系统
  "main": "index.js",                  // 主入口文件
  "exports": {                         // 导出配置
    ".": "./index.js",                 // 默认导出
    "./components/*": "./components/*.vue"  // 组件导出
  }
}
```

#### `name`
- **作用**: 包名称
- **说明**: 使用 `@monorepo` scope 标识内部包

#### `version`
- **作用**: 版本号
- **说明**: 用于版本管理和依赖解析

#### `main`
- **作用**: 主入口文件
- **说明**: 当其他包 `import` 这个包时，会加载这个文件

#### `exports`
- **作用**: 定义包的导出接口
- **说明**: 控制包的公共 API
- **`"."`**: 默认导出，指向 `index.js`
- **`"./components/*"`**: 允许直接导入组件文件

### 脚本命令 (scripts)
```json
{
  "scripts": {
    "build": "echo 'UI package build completed' && exit 0",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path ../../.gitignore",
    "format": "prettier --write .",
    "clean": "rm -rf node_modules"
  }
}
```

- **`build`**: 
  - 简单的构建脚本，输出完成信息
  - `&& exit 0` 确保脚本成功退出
  - 对于纯组件库，通常不需要复杂构建

- **`lint`**: 
  - 检查 Vue 和 JavaScript 文件
  - 支持多种文件扩展名
  - 自动修复可修复的问题

- **`format`**: 使用 Prettier 格式化代码
- **`clean`**: 清理依赖文件

### 依赖管理
```json
{
  "peerDependencies": {
    "vue": "^3.5.17"                   // Vue 3 作为对等依赖
  }
}
```

#### `peerDependencies`
- **作用**: 声明对等依赖
- **说明**: 表示这个包需要 Vue 3，但不直接安装
- **优势**: 
  - 避免版本冲突
  - 减少包大小
  - 确保使用应用中的 Vue 版本

## Utils 包配置 (packages/utils/package.json)

### 基础信息
```json
{
  "name": "@monorepo/utils",           // 工具包名称
  "version": "1.0.0",                  // 版本号
  "type": "module",                    // ES 模块系统
  "main": "index.js",                  // 主入口文件
  "exports": {                         // 导出配置
    ".": "./index.js",                 // 默认导出
    "./string": "./string.js",         // 字符串工具导出
    "./date": "./date.js"              // 日期工具导出
  }
}
```

### 脚本命令
```json
{
  "scripts": {
    "build": "echo 'Utils package build completed' && exit 0",
    "lint": "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path ../../.gitignore",
    "format": "prettier --write .",
    "clean": "rm -rf node_modules"
  }
}
```

- **`build`**: 简单的构建脚本
- **`lint`**: 只检查 JavaScript 文件（不包含 Vue）
- **`format`**: 代码格式化
- **`clean`**: 清理依赖

### 依赖管理
Utils 包没有外部依赖，只包含纯工具函数。

## 包的设计原则

### 1. 导出策略
```json
{
  "exports": {
    ".": "./index.js",                 // 默认导出
    "./components/*": "./components/*.vue",  // 按需导入组件
    "./string": "./string.js",         // 按功能模块导出
    "./date": "./date.js"              // 按功能模块导出
  }
}
```

#### 优势
- **按需导入**: 只加载需要的功能，减少包大小
- **树摇优化**: 支持构建工具的树摇优化
- **清晰 API**: 明确的导入路径

### 2. 依赖管理
- **对等依赖**: 对于框架相关的包，使用 `peerDependencies`
- **无外部依赖**: 工具包尽量不依赖外部包
- **版本管理**: 使用语义化版本号

### 3. 构建策略
- **简单构建**: 对于纯 JavaScript/Vue 包，使用简单构建
- **无输出文件**: 不产生构建输出，避免缓存警告
- **脚本标准化**: 所有包使用相同的脚本结构

## 与 Turborepo 的集成

### 任务执行
- Turborepo 会自动识别包的脚本
- 支持并行构建多个包
- 智能缓存构建结果

### 依赖关系
- 自动处理包之间的依赖关系
- 确保构建顺序正确
- 支持增量构建

### 缓存优化
- 包级别的缓存
- 基于文件内容的缓存键
- 支持远程缓存

## 最佳实践

### 1. 包结构
- 使用清晰的目录结构
- 提供明确的入口文件
- 支持多种导入方式

### 2. 导出设计
- 提供默认导出和命名导出
- 支持按需导入
- 保持 API 的向后兼容性

### 3. 依赖管理
- 合理使用 `peerDependencies`
- 避免不必要的依赖
- 使用语义化版本号

### 4. 构建优化
- 使用简单的构建脚本
- 避免产生不必要的输出文件
- 支持开发和生产环境

## 使用示例

### 在应用中使用包
```javascript
// 默认导入
import { Button, Card } from '@monorepo/ui'

// 按需导入组件
import Button from '@monorepo/ui/components/Button.vue'

// 导入工具函数
import { capitalize } from '@monorepo/utils'
import { formatDate } from '@monorepo/utils/date'
```

### 包之间的依赖
```json
{
  "dependencies": {
    "@monorepo/ui": "workspace:*",
    "@monorepo/utils": "workspace:*"
  }
}
```

这种设计确保了：
- 代码的可重用性
- 依赖的清晰管理
- 构建的高效性
- 开发的便利性 