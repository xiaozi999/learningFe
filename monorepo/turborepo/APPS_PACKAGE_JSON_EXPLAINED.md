# 应用 package.json 配置详解

## 文件概述

应用的 `package.json` 文件定义了单个应用的配置，包括脚本命令、依赖关系和构建配置。

## Vue 应用配置 (apps/vue-app/package.json)

### 基础信息
```json
{
  "name": "vue-app",                    // 应用名称
  "private": true,                      // 私有项目
  "type": "module"                      // ES 模块系统
}
```

#### `name`
- **作用**: 应用名称
- **说明**: 用于标识应用，在 monorepo 中通常使用描述性名称

#### `private`
- **作用**: 标记为私有项目
- **说明**: 防止意外发布到 npm，确保应用安全

#### `type`
- **作用**: 指定模块系统
- **说明**: `"module"` 表示使用 ES 模块系统

### 脚本命令 (scripts)

#### 开发命令
```json
{
  "dev": "vite",                        // 启动 Vite 开发服务器
  "build": "vite build",                // 构建生产版本
  "preview": "vite preview"             // 预览构建结果
}
```

- **`dev`**: 启动 Vite 开发服务器，支持热重载
- **`build`**: 使用 Vite 构建生产版本，优化和压缩代码
- **`preview`**: 启动本地服务器预览构建后的应用

#### 代码质量命令
```json
{
  "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path ../../.gitignore",
  "format": "prettier --write .",
  "clean": "rm -rf dist node_modules"
}
```

- **`lint`**: 
  - 运行 ESLint 检查代码质量
  - `--ext` 指定检查的文件扩展名
  - `--fix` 自动修复可修复的问题
  - `--ignore-path` 指定忽略文件路径
- **`format`**: 使用 Prettier 格式化代码
- **`clean`**: 清理构建文件和依赖

### 依赖管理 (dependencies)

```json
{
  "dependencies": {
    "@monorepo/ui": "workspace:*",      // 引用内部 UI 组件库
    "@monorepo/utils": "workspace:*"    // 引用内部工具函数库
  }
}
```

#### `workspace:*` 协议
- **作用**: 引用工作空间内的其他包
- **说明**: 使用 `*` 表示使用最新版本，支持实时更新
- **优势**: 
  - 本地开发时实时同步
  - 避免版本冲突
  - 简化依赖管理

## 管理后台应用配置 (apps/admin-app/package.json)

### 配置结构
管理后台应用的配置与 Vue 应用基本相同，只是名称不同：

```json
{
  "name": "admin-app",                  // 管理后台应用名称
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",                      // 开发服务器
    "build": "vite build",              // 构建应用
    "preview": "vite preview",          // 预览构建结果
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path ../../.gitignore",
    "format": "prettier --write .",     // 代码格式化
    "clean": "rm -rf dist node_modules" // 清理文件
  },
  "dependencies": {
    "@monorepo/ui": "workspace:*",      // 共享 UI 组件
    "@monorepo/utils": "workspace:*"    // 共享工具函数
  }
}
```

## Turborepo 集成

### 脚本命令标准化
所有应用都使用相同的脚本命令结构：
- `dev`: 开发模式
- `build`: 构建模式
- `preview`: 预览模式
- `lint`: 代码检查
- `format`: 代码格式化
- `clean`: 清理文件

### 依赖管理
- 使用 `workspace:*` 引用内部包
- 共享 UI 组件和工具函数
- 避免重复安装相同依赖

## 最佳实践

### 1. 脚本命令
- 保持所有应用使用相同的命令结构
- 使用标准的构建工具（如 Vite）
- 提供完整的开发、构建、质量检查命令

### 2. 依赖管理
- 优先使用内部包 (`workspace:*`)
- 避免重复安装相同依赖
- 合理划分应用特定的依赖

### 3. 代码质量
- 统一的 lint 和 format 配置
- 使用相对路径引用忽略文件
- 支持多种文件扩展名

### 4. 构建优化
- 使用 Vite 进行快速构建
- 支持开发和生产环境
- 提供预览功能验证构建结果

## 与 Turborepo 的配合

### 任务执行
- Turborepo 会自动识别和运行这些脚本
- 支持并行执行独立任务
- 智能缓存构建结果

### 依赖关系
- 自动处理应用与包的依赖关系
- 确保构建顺序正确
- 支持增量构建

### 开发体验
- 统一的命令接口
- 快速的开发服务器启动
- 实时的代码质量检查 