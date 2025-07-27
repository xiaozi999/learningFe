# Turborepo Monorepo

这是一个使用 Turborepo 构建的 Vue.js monorepo 项目。

## 项目结构

```
turborepo/
├── apps/
│   ├── vue-app/          # Vue 应用
│   └── admin-app/        # 管理后台应用
├── packages/
│   ├── ui/               # UI 组件库
│   ├── utils/            # 工具函数库
│   └── config/           # 共享配置
└── tools/
    └── scripts/          # 构建脚本
```

## 技术栈

- **构建工具**: Turborepo + Vite
- **前端框架**: Vue 3
- **包管理器**: pnpm
- **代码质量**: ESLint + Prettier

## 快速开始

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install
```

### 开发模式

```bash
# 启动所有应用的开发服务器
pnpm dev

# 启动特定应用
pnpm --filter=vue-app dev
pnpm --filter=admin-app dev
```

### 构建

```bash
# 构建所有项目
pnpm build

# 构建特定项目
pnpm --filter=vue-app build
pnpm --filter=admin-app build
```

### 代码质量

```bash
# 运行所有 lint 检查
pnpm lint

# 格式化代码
pnpm format

# 清理构建文件
pnpm clean
```

## Turborepo 特性

### 缓存

Turborepo 会自动缓存构建结果，提高后续构建速度：

```bash
# 查看缓存状态
npx turbo run build --dry-run

# 清理缓存
npx turbo run clean
```

### 并行执行

Turborepo 会自动并行执行独立的任务，提高构建效率。

### 依赖管理

- 使用 `workspace:*` 语法引用内部包
- 自动处理包之间的依赖关系

## 包说明

### Apps

- **vue-app**: 主要的 Vue 应用
- **admin-app**: 管理后台应用

### Packages

- **@monorepo/ui**: 共享的 UI 组件库
- **@monorepo/utils**: 工具函数库

## 配置说明

### turbo.json

定义了构建管道和任务依赖关系：

- `build`: 构建任务，支持依赖构建
- `dev`: 开发模式，持久运行
- `lint`: 代码检查
- `format`: 代码格式化
- `clean`: 清理任务

### pnpm-workspace.yaml

定义了工作空间结构：

```yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'tools/*'
```

## 开发建议

1. 使用 `pnpm` 作为包管理器以获得最佳体验
2. 利用 Turborepo 的缓存功能提高开发效率
3. 遵循 monorepo 的最佳实践组织代码
4. 使用 `--dry-run` 参数预览任务执行计划
