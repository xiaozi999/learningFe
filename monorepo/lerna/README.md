# Lerna Monorepo

这是一个使用 Lerna 管理的 monorepo 项目，包含多个 Vue.js 应用和共享包。

## 项目结构

```
lerna/
├── apps/                 # 应用目录
│   ├── vue-app/         # Vue 应用
│   └── admin-app/       # 管理后台应用
├── packages/            # 共享包目录
│   ├── ui/             # UI 组件库
│   └── utils/          # 工具函数库
└── tools/              # 工具脚本
```

## 依赖管理策略

### 根目录依赖
所有共享的开发依赖都安装在根目录，包括：
- **构建工具**: vite, @vitejs/plugin-vue
- **代码质量**: eslint, prettier
- **框架**: vue, vue-router
- **Monorepo 工具**: lerna

### 子包依赖
子包只保留特定的依赖：
- **应用包**: 只依赖共享包（@monorepo/ui, @monorepo/utils）
- **共享包**: 只包含自己的特定依赖

### 优势
- ✅ 避免依赖重复
- ✅ 减少包体积
- ✅ 统一版本管理
- ✅ 简化维护

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
pnpm dev
```

### 构建

构建所有应用：

```bash
pnpm build:all
```

或者构建特定应用：

```bash
pnpm build
```

### 代码检查

运行所有应用的代码检查：

```bash
pnpm lint
```

### 格式化代码

格式化所有代码：

```bash
pnpm format
```

## Lerna 命令

### 列出所有包

```bash
npx lerna list
```

### 运行命令

在所有包中运行指定命令：

```bash
npx lerna run <command> --stream
```

例如：
- `npx lerna run build --stream` - 构建所有包
- `npx lerna run dev --parallel --stream` - 并行启动所有开发服务器
- `npx lerna run lint --stream` - 运行代码检查

### 版本管理

```bash
npx lerna version    # 更新版本号
npx lerna publish    # 发布包
npx lerna changed    # 查看变更的包
npx lerna diff       # 查看差异
```

## 包管理

### 添加新包

1. 在 `apps/` 或 `packages/` 目录下创建新包
2. 确保包有正确的 `package.json` 配置
3. 运行 `pnpm install` 安装依赖

### 包间依赖

使用 workspace 协议引用其他包：

```json
{
  "dependencies": {
    "@monorepo/ui": "workspace:*",
    "@monorepo/utils": "workspace:*"
  }
}
```

### 添加新依赖

- **共享依赖**: 在根目录添加 `pnpm add -w <package>`
- **特定依赖**: 在子包中添加 `pnpm add <package> --filter <package-name>`

## 脚本说明

- `dev` - 启动开发服务器
- `build` - 构建生产版本
- `preview` - 预览构建结果
- `lint` - 代码检查
- `format` - 代码格式化
- `clean` - 清理构建文件
- `install:all` - 安装所有依赖
- `build:all` - 构建所有应用
- `dev:all` - 启动所有开发服务器
- `test:all` - 运行所有测试
- `publish` - 发布包
- `version` - 更新版本号
- `changed` - 查看变更的包
- `diff` - 查看差异
- `list` - 列出所有包

## 技术栈

- **包管理器**: pnpm
- **Monorepo 工具**: Lerna
- **前端框架**: Vue 3
- **构建工具**: Vite
- **代码检查**: ESLint
- **代码格式化**: Prettier
