# Monorepo 学习项目

这是一个用于学习 monorepo 概念的 Vue.js 项目。项目使用 pnpm workspace 来管理多个包。

## 项目结构

```
monorepo/
├── packages/
│   ├── ui/              # UI组件库
│   │   ├── components/  # Vue组件
│   │   └── index.js     # 导出文件
│   └── utils/           # 工具函数库
│       ├── string.js    # 字符串工具
│       ├── date.js      # 日期工具
│       └── index.js     # 导出文件
├── src/                 # 主应用
├── pnpm-workspace.yaml  # pnpm workspace配置
└── package.json         # 根目录配置
```

## 包说明

### @monorepo/ui
UI组件库，包含：
- `Button` - 按钮组件（支持不同样式和尺寸）
- `Card` - 卡片组件（支持header、body、footer插槽）

### @monorepo/utils
工具函数库，包含：
- 字符串工具：`capitalize`、`camelToKebab`、`kebabToCamel`、`randomString`
- 日期工具：`formatDate`、`getRelativeTime`、`isToday`、`getDateRange`

## 安装和运行

### 前置要求
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
pnpm dev
```

### 构建项目
```bash
pnpm build
```

## 可用的命令

### 根目录命令
- `pnpm dev` - 启动主应用开发服务器
- `pnpm build` - 构建主应用
- `pnpm build:all` - 构建所有包
- `pnpm dev:all` - 并行启动所有包的开发服务器
- `pnpm clean` - 清理所有依赖
- `pnpm format` - 格式化代码

### 包管理命令
- `pnpm --filter=@monorepo/ui dev` - 只启动UI包的开发服务器
- `pnpm --filter=@monorepo/utils build` - 只构建工具包
- `pnpm -r build` - 递归构建所有包

## Monorepo 学习要点

### 1. Workspace 配置
- `pnpm-workspace.yaml` 定义了工作空间的范围
- 支持 `packages/*`、`apps/*`、`tools/*` 等模式

### 2. 包依赖管理
- 使用 `workspace:*` 来引用工作空间内的其他包
- 支持版本锁定和依赖提升

### 3. 脚本管理
- 根目录的脚本可以操作所有包
- 使用 `--filter` 参数来操作特定包
- 使用 `-r` 参数来递归操作所有包

### 4. 开发流程
- 本地包之间的依赖是实时的
- 修改一个包会立即反映到依赖它的其他包中
- 支持并行开发和构建

## 扩展学习

### 其他 Monorepo 工具
1. **Lerna** - 传统的 monorepo 管理工具
2. **Nx** - 现代化的构建系统
3. **Turborepo** - 高性能的构建系统
4. **Rush** - 微软的 monorepo 解决方案

### 高级特性
- 包版本管理
- 依赖图分析
- 缓存优化
- CI/CD 集成
- 测试策略

## 贡献

这是一个学习项目，欢迎提出改进建议和问题反馈。
