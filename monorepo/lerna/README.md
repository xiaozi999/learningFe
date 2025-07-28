# Monorepo Demo - 标准 Lerna 结构

这是一个使用标准 Lerna 结构的 monorepo 项目，所有包都统一在 `packages` 目录下管理。

## 项目结构

```
lerna/
├── packages/                    # 所有包统一管理
│   ├── remix-app/              # Remix 应用
│   ├── admin-app/              # 管理后台应用
│   ├── header/                 # 头部组件库
│   ├── footer/                 # 底部组件库
│   ├── ui/                     # 通用 UI 组件库
│   └── utils/                  # 工具函数库
├── package.json                # 根配置文件
├── lerna.json                  # Lerna 配置
└── README.md
```

## 包说明

### 应用包
- **@monorepo/remix-app**: Remix 应用，使用 Vue 3 + Vite
- **@monorepo/admin-app**: 管理后台应用，使用 Vue 3 + Vite

### 组件库
- **@monorepo/header**: 头部组件库，提供通用的页面头部组件
- **@monorepo/footer**: 底部组件库，提供通用的页面底部组件
- **@monorepo/ui**: 通用 UI 组件库
- **@monorepo/utils**: 工具函数库

## 依赖管理

### 标准 Lerna 依赖管理
- 使用标准的包版本号（如 `^1.0.0`）而非 `workspace:*` 协议
- 通过 Vite 配置的 `resolve.alias` 实现正确的模块解析
- 共享依赖提升到根目录，避免重复安装

### 模块解析配置
应用包通过 `vite.config.js` 中的 `resolve.alias` 配置来解析 monorepo 内的包：

```javascript
resolve: {
  alias: {
    '@monorepo/header': path.resolve(__dirname, '../header/index.js'),
    '@monorepo/footer': path.resolve(__dirname, '../footer/index.js'),
    '@monorepo/ui': path.resolve(__dirname, '../ui/index.js'),
    '@monorepo/utils': path.resolve(__dirname, '../utils/index.js'),
  },
}
```

## 可用命令

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
# 启动所有应用
pnpm run dev:all

# 启动特定应用
npx lerna run dev --scope=@monorepo/remix-app
npx lerna run dev --scope=@monorepo/admin-app
```

### 构建
```bash
# 构建所有包
pnpm run build

# 构建特定包
npx lerna run build --scope=@monorepo/remix-app
npx lerna run build --scope=@monorepo/admin-app
```

### 代码质量
```bash
# 代码检查
pnpm run lint

# 代码格式化
pnpm run format
```

### Lerna 命令
```bash
# 列出所有包
npx lerna list

# 查看包依赖关系
npx lerna list --graph

# 查看已更改的包
npx lerna changed

# 清理所有包的 node_modules
npx lerna clean
```

## 开发指南

### 添加新包
1. 在 `packages` 目录下创建新的包目录
2. 创建 `package.json`，确保包名使用 `@monorepo/` 前缀
3. 如果是应用包，需要在 `vite.config.js` 中配置模块解析别名

### 包间依赖
- 在 `package.json` 中使用标准版本号声明依赖
- 通过 Vite 配置实现正确的模块解析
- 使用 `import { Component } from '@monorepo/package-name'` 语法导入

### 构建顺序
Lerna 会自动处理包之间的依赖关系和构建顺序：
1. 首先构建基础包（header, footer, ui, utils）
2. 然后构建依赖这些包的应用包（remix-app, admin-app）

## 技术栈

- **包管理**: Lerna + pnpm
- **构建工具**: Vite
- **前端框架**: Vue 3
- **路由**: Vue Router
- **代码质量**: ESLint + Prettier
- **开发工具**: Vue DevTools

## 特性

- ✅ 标准 Lerna 结构，所有包统一在 packages 下管理
- ✅ 正确的模块解析配置，支持包名导入
- ✅ 自动依赖管理和构建顺序
- ✅ 共享组件库和工具库
- ✅ 统一的代码规范和格式化
- ✅ 开发和生产环境构建
- ✅ 热重载开发体验
