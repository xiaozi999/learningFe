# Rush Monorepo 项目

这是一个使用 Microsoft Rush 构建工具管理的 monorepo 项目，包含多个 Vue.js 应用和共享包。

## 🏗️ 项目结构

```
rush/
├── apps/                    # 应用项目目录
│   ├── vue-app/            # 主要 Vue 应用
│   └── admin-app/          # 管理后台应用
├── packages/                # 共享包目录
│   ├── ui/                 # UI 组件库
│   └── utils/              # 工具函数库
├── tools/                   # 工具脚本目录
├── common/                  # Rush 公共配置
│   ├── config/rush/        # Rush 配置文件
│   └── scripts/            # 公共脚本
└── rush.json               # Rush 主配置文件
```

## 📦 项目说明

### 应用项目 (apps/)

- **vue-app**: 主要的前端应用，使用 Vue 3 + Vite
- **admin-app**: 管理后台应用，使用 Vue 3 + Vite

### 共享包 (packages/)

- **@monorepo/ui**: UI 组件库，提供可复用的 Vue 组件
- **@monorepo/utils**: 工具函数库，提供通用的工具函数

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- Rush (全局安装): `npm install -g @microsoft/rush`

### 安装依赖

```bash
# 安装所有项目依赖
rush update
```

### 开发命令

```bash
# 构建所有项目
rush build

# 开发模式运行所有应用
rush build --to-except @monorepo/ui @monorepo/utils

# 运行特定项目
rush build --to vue-app
rush build --to admin-app

# 清理构建文件
rush purge
```

### 项目特定命令

```bash
# 进入特定项目目录
cd apps/vue-app
rushx dev          # 启动开发服务器
rushx build        # 构建项目
rushx preview      # 预览构建结果
```

## 🔧 Rush 命令说明

### 核心命令

- `rush update`: 安装/更新所有项目依赖
- `rush build`: 构建所有项目
- `rush rebuild`: 强制重新构建所有项目
- `rush purge`: 清理所有构建文件和缓存
- `rush check`: 检查项目配置和依赖关系

### 项目选择

- `rush build --to <project>`: 构建指定项目及其依赖
- `rush build --from <project>`: 构建指定项目及其被依赖的项目
- `rush build --only <project>`: 仅构建指定项目

### 开发工具

- `rushx <script>`: 在项目目录中运行脚本
- `rush list`: 列出所有项目
- `rush list --only tag:vue`: 列出带有特定标签的项目

## 📋 项目标签

- `frontend`: 前端项目
- `vue`: Vue.js 相关项目
- `admin`: 管理后台项目
- `library`: 库项目
- `ui`: UI 组件相关
- `utils`: 工具函数相关

## 🔄 工作流程

1. **开发新功能**:
   ```bash
   rush update
   rush build --to vue-app
   cd apps/vue-app
   rushx dev
   ```

2. **添加新依赖**:
   ```bash
   cd apps/vue-app
   rush add --package <package-name>
   ```

3. **发布更新**:
   ```bash
   rush change
   rush version
   rush publish
   ```

## 📁 配置文件说明

### rush.json
- 主配置文件，定义项目结构和构建规则
- 包含项目列表、依赖关系、构建脚本等

### common/config/rush/
- `common-versions.json`: 统一版本管理
- `pnpm-config.json`: pnpm 包管理器配置
- `command-line.json`: 命令行工具配置

## 🛠️ 开发工具

- **Vite**: 构建工具，提供快速的开发体验
- **Vue 3**: 前端框架
- **Vue Router**: 路由管理
- **ESLint**: 代码检查
- **Prettier**: 代码格式化

## 📝 注意事项

1. 所有项目依赖都通过 Rush 统一管理
2. 使用 `workspace:*` 协议引用本地包
3. 构建顺序由依赖关系自动确定
4. 共享配置在 `common/config/rush/` 目录中

## 🤝 贡献指南

1. 确保所有测试通过: `rush build`
2. 遵循代码规范: `rush lint`
3. 提交前运行: `rush check`

## 📚 更多信息

- [Rush 官方文档](https://rushjs.io/)
- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
