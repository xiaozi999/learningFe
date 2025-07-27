# 根目录 package.json 配置详解

## 文件概述

根目录的 `package.json` 是 monorepo 的主配置文件，定义了整个项目的元数据、脚本命令和依赖关系。

## 配置详解

### 基础信息

```json
{
  "name": "monorepo-demo",           // 项目名称
  "private": true,                   // 私有项目，防止意外发布到 npm
  "type": "module",                  // 使用 ES 模块系统
  "packageManager": "pnpm@8.0.0"    // 指定使用的包管理器
}
```

#### `name`
- **作用**: 项目名称
- **说明**: 用于标识项目，在 monorepo 中通常作为根项目名称

#### `private`
- **作用**: 标记为私有项目
- **说明**: 防止意外发布到 npm 注册表，确保项目安全

#### `type`
- **作用**: 指定模块系统
- **说明**: `"module"` 表示使用 ES 模块系统，支持 `import/export` 语法

#### `packageManager`
- **作用**: 指定包管理器
- **说明**: 告诉工具使用哪个包管理器，确保一致性

### 脚本命令 (scripts)

#### 开发相关命令
```json
{
  "dev": "turbo run dev",                    // 启动所有应用的开发服务器
  "dev:all": "turbo run dev"                 // 同上，启动所有开发服务器
}
```

- **`dev`**: 使用 Turborepo 启动所有应用的开发服务器
- **`dev:all`**: 与 `dev` 相同，提供别名

#### 构建相关命令
```json
{
  "build": "turbo run build",                // 构建所有项目
  "build:all": "turbo run build",            // 同上，构建所有项目
  "preview": "turbo run preview"             // 预览构建结果
}
```

- **`build`**: 使用 Turborepo 构建所有应用和包
- **`build:all`**: 与 `build` 相同，提供别名
- **`preview`**: 预览构建后的应用

#### 代码质量命令
```json
{
  "lint": "turbo run lint",                  // 运行所有项目的 lint 检查
  "format": "turbo run format"               // 格式化所有项目的代码
}
```

- **`lint`**: 使用 Turborepo 运行所有项目的 ESLint 检查
- **`format`**: 使用 Turborepo 格式化所有项目的代码

#### 维护命令
```json
{
  "clean": "turbo run clean && rm -rf node_modules",  // 清理构建文件和依赖
  "install:all": "pnpm install",                      // 安装所有依赖
  "test:all": "turbo run test"                        // 运行所有测试
}
```

- **`clean`**: 清理所有项目的构建文件和缓存，同时删除 node_modules
- **`install:all`**: 使用 pnpm 安装工作空间内的所有依赖
- **`test:all`**: 使用 Turborepo 运行所有项目的测试

### 依赖管理

#### 运行时依赖 (dependencies)
```json
{
  "dependencies": {
    "vue": "^3.5.17",              // Vue 3 框架
    "vue-router": "^4.5.1"         // Vue 路由
  }
}
```

- **作用**: 运行时需要的依赖
- **说明**: 这些依赖会被所有项目共享，避免重复安装

#### 开发依赖 (devDependencies)
```json
{
  "devDependencies": {
    // ESLint 相关
    "@eslint/js": "^9.29.0",                    // ESLint JavaScript 规则
    "eslint": "^9.29.0",                        // ESLint 核心
    "eslint-plugin-vue": "~10.2.0",             // Vue 专用 ESLint 插件
    
    // Vite 相关
    "@vitejs/plugin-vue": "^5.0.0",             // Vue 专用 Vite 插件
    "vite": "^5.0.0",                           // Vite 构建工具
    "vite-plugin-vue-devtools": "^7.7.7",       // Vue 开发工具插件
    
    // 代码格式化
    "@vue/eslint-config-prettier": "^10.2.0",   // ESLint 和 Prettier 集成
    "prettier": "3.5.3",                        // 代码格式化工具
    
    // 其他工具
    "globals": "^16.2.0",                       // 全局变量定义
    
    // Turborepo
    "turbo": "^2.0.0"                           // 高性能构建系统
  }
}
```

### 引擎要求 (engines)
```json
{
  "engines": {
    "node": ">=18.0.0",                         // Node.js 版本要求
    "pnpm": ">=8.0.0"                           // pnpm 版本要求
  }
}
```

- **作用**: 指定运行环境要求
- **说明**: 确保团队成员使用兼容的 Node.js 和包管理器版本

## Turborepo 集成

### 脚本命令变化
- **之前**: 使用 `pnpm --filter` 或 `pnpm -r` 命令
- **现在**: 使用 `turbo run` 命令，更简洁高效

### 优势
1. **统一命令**: 所有项目使用相同的命令结构
2. **智能缓存**: 自动缓存构建结果，提高速度
3. **并行执行**: 独立任务自动并行执行
4. **依赖管理**: 自动处理包之间的依赖关系

## 最佳实践

### 1. 脚本命名
- 使用描述性的脚本名称
- 提供别名命令（如 `dev` 和 `dev:all`）
- 保持命令简洁明了

### 2. 依赖管理
- 将共享依赖放在根目录
- 使用 `workspace:*` 引用内部包
- 合理划分运行时和开发依赖

### 3. 版本控制
- 使用 `engines` 指定版本要求
- 使用 `packageManager` 指定包管理器
- 保持依赖版本的一致性

### 4. 脚本组织
- 按功能分组脚本命令
- 提供常用的快捷命令
- 确保命令的可读性和可维护性 