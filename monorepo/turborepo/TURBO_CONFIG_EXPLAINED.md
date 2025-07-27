# turbo.json 配置详解

## 文件概述

`turbo.json` 是 Turborepo 的核心配置文件，定义了构建管道和任务依赖关系。

## 配置结构详解

### 1. 基础配置

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "globalEnv": ["NODE_ENV"]
}
```

#### `$schema`
- **作用**: 提供 JSON Schema 验证和 IDE 智能提示
- **说明**: 指向 Turborepo 的官方 schema 定义

#### `globalDependencies`
- **作用**: 定义全局依赖文件
- **说明**: 当这些文件发生变化时，所有缓存都会失效
- **示例**: `["**/.env.*local"]` 表示所有 `.env.local` 文件

#### `globalEnv`
- **作用**: 定义全局环境变量
- **说明**: 这些环境变量会影响所有任务的缓存键
- **示例**: `["NODE_ENV"]` 表示 NODE_ENV 环境变量会影响缓存

### 2. 任务定义 (tasks)

#### build 任务
```json
"build": {
  "dependsOn": ["^build"],
  "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
}
```

- **`dependsOn: ["^build"]`**
  - **作用**: 定义任务依赖关系
  - **说明**: `^build` 表示依赖所有上游包的 build 任务
  - **示例**: 如果 `vue-app` 依赖 `@monorepo/ui`，那么 `vue-app` 的 build 会在 `ui` 的 build 完成后执行

- **`outputs: ["dist/**", ".next/**", "!.next/cache/**"]`**
  - **作用**: 指定构建产生的文件
  - **说明**: 用于缓存判断，只有这些文件变化时才会重新构建
  - **`dist/**`**: 构建输出目录
  - **`.next/**`**: Next.js 构建输出（如果使用）
  - **`!.next/cache/**`**: 排除 Next.js 缓存目录

#### dev 任务
```json
"dev": {
  "cache": false,
  "persistent": true
}
```

- **`cache: false`**
  - **作用**: 禁用缓存
  - **说明**: 开发服务器不应该被缓存，每次都会重新启动

- **`persistent: true`**
  - **作用**: 标记为持久任务
  - **说明**: 开发服务器会持续运行，不会自动结束

#### preview 任务
```json
"preview": {
  "dependsOn": ["build"]
}
```

- **`dependsOn: ["build"]`**
  - **作用**: 依赖构建任务
  - **说明**: 预览前必须先构建

#### lint 任务
```json
"lint": {
  "dependsOn": ["^lint"]
}
```

- **`dependsOn: ["^lint"]`**
  - **作用**: 依赖上游包的 lint 任务
  - **说明**: 确保依赖包的代码质量检查先完成

#### format 任务
```json
"format": {
  "dependsOn": ["^format"]
}
```

- **`dependsOn: ["^format"]`**
  - **作用**: 依赖上游包的 format 任务
  - **说明**: 确保依赖包的代码格式化先完成

#### clean 任务
```json
"clean": {
  "cache": false
}
```

- **`cache: false`**
  - **作用**: 禁用缓存
  - **说明**: 清理任务不应该被缓存

#### test 任务
```json
"test": {
  "dependsOn": ["^build"],
  "outputs": ["coverage/**"]
}
```

- **`dependsOn: ["^build"]`**
  - **作用**: 依赖构建任务
  - **说明**: 测试前需要先构建

- **`outputs: ["coverage/**"]`**
  - **作用**: 测试输出文件
  - **说明**: 测试覆盖率报告等文件

## 依赖关系说明

### `^` 前缀
- **作用**: 表示依赖所有上游包
- **示例**: `"^build"` 表示依赖所有被当前包依赖的包的 build 任务

### 无前缀
- **作用**: 表示依赖当前包
- **示例**: `"build"` 表示依赖当前包的 build 任务

## 缓存机制

### 缓存键生成
Turborepo 基于以下因素生成缓存键：
1. 任务名称
2. 依赖关系
3. 输入文件内容
4. 环境变量
5. 全局依赖文件

### 缓存策略
- **启用缓存**: 默认启用，提高构建速度
- **禁用缓存**: 对于 dev、clean 等任务禁用缓存
- **持久任务**: 对于 dev 等持续运行的任务标记为持久

## 最佳实践

1. **合理设置 outputs**: 只包含必要的输出文件
2. **正确配置依赖**: 确保任务依赖关系正确
3. **禁用不必要的缓存**: 对于清理、开发等任务禁用缓存
4. **使用全局环境变量**: 影响缓存的环境变量要加入 globalEnv 