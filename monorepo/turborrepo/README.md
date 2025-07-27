# Turborepo 项目

这是一个使用 Turborepo 构建的 monorepo 项目，包含多个 Vue.js 应用和共享包。

## 项目结构

```
turborrepo/
├── apps/
│   ├── vue-app/          # Vue.js 应用
│   └── admin-app/        # 管理后台应用
├── packages/
│   ├── ui/              # 共享 UI 组件
│   └── utils/           # 共享工具函数
└── tools/
    └── scripts/         # 构建脚本
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

启动所有应用的开发服务器：

```bash
pnpm dev:all
```

或者启动特定应用：

```bash
pnpm dev --filter=vue-app
pnpm dev --filter=admin-app
```

### 构建

构建所有项目：

```bash
pnpm build:all
```

或者构建特定项目：

```bash
pnpm build --filter=vue-app
pnpm build --filter=admin-app
```

### 代码检查

运行所有项目的 lint：

```bash
pnpm lint
```

格式化代码：

```bash
pnpm format
```

### 清理

清理所有构建产物：

```bash
pnpm clean
```

## Turborepo 特性

- **增量构建**: 只重新构建发生变化的项目
- **并行执行**: 可以并行运行多个任务
- **缓存**: 构建结果会被缓存，提升后续构建速度
- **依赖管理**: 自动处理项目间的依赖关系

## 可用的脚本

- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建项目
- `pnpm lint` - 代码检查
- `pnpm format` - 代码格式化
- `pnpm clean` - 清理构建产物
- `pnpm preview` - 预览构建结果

## 技术栈

- **构建工具**: Turborepo + Vite
- **包管理器**: pnpm
- **框架**: Vue.js 3
- **代码检查**: ESLint
- **代码格式化**: Prettier
