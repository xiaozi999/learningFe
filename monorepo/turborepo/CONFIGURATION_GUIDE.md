# Turborepo 配置完整指南

## 📋 配置文件概览

本项目包含以下主要配置文件，每个文件都有特定的作用和配置：

### 核心配置文件
1. **`turbo.json`** - Turborepo 构建管道配置
2. **`package.json`** - 根目录项目配置
3. **`pnpm-workspace.yaml`** - 工作空间定义

### 应用配置文件
4. **`apps/*/package.json`** - 应用配置
5. **`packages/*/package.json`** - 包配置

### 其他配置文件
6. **`.gitignore`** - Git 忽略文件配置
7. **`README.md`** - 项目说明文档

## 🔧 详细配置说明

### 1. turbo.json - 构建管道配置

**作用**: 定义 Turborepo 的任务管道和依赖关系

**关键配置**:
- `tasks`: 定义所有可执行的任务
- `dependsOn`: 指定任务依赖关系
- `outputs`: 指定构建输出文件
- `cache`: 控制缓存行为
- `persistent`: 标记持久任务

**主要任务**:
- `build`: 构建任务，支持依赖构建
- `dev`: 开发任务，持久运行
- `lint`: 代码检查任务
- `format`: 代码格式化任务
- `clean`: 清理任务
- `test`: 测试任务

### 2. package.json (根目录) - 项目主配置

**作用**: 定义整个 monorepo 的元数据和脚本

**关键配置**:
- `scripts`: 定义根目录可执行的命令
- `dependencies`: 共享的运行时依赖
- `devDependencies`: 开发工具依赖
- `engines`: 运行环境要求
- `packageManager`: 指定包管理器

**主要脚本**:
- `dev`: 启动所有应用的开发服务器
- `build`: 构建所有项目
- `lint`: 运行所有项目的代码检查
- `format`: 格式化所有项目的代码
- `clean`: 清理构建文件和缓存

### 3. pnpm-workspace.yaml - 工作空间配置

**作用**: 定义 pnpm 工作空间的范围

**配置内容**:
```yaml
packages:
  - 'packages/*'    # 内部包
  - 'apps/*'        # 应用
  - 'tools/*'       # 工具脚本
```

### 4. 应用 package.json - 应用配置

**作用**: 定义单个应用的配置

**关键配置**:
- `name`: 应用名称
- `scripts`: 应用特定的脚本命令
- `dependencies`: 应用依赖，使用 `workspace:*` 引用内部包

**标准脚本**:
- `dev`: 启动开发服务器
- `build`: 构建应用
- `preview`: 预览构建结果
- `lint`: 代码检查
- `format`: 代码格式化
- `clean`: 清理文件

### 5. 包 package.json - 包配置

**作用**: 定义内部包的配置

**关键配置**:
- `name`: 包名称（使用 scope）
- `main`: 主入口文件
- `exports`: 导出接口定义
- `peerDependencies`: 对等依赖
- `scripts`: 包构建脚本

**导出策略**:
- 默认导出: `".": "./index.js"`
- 按需导出: `"./components/*": "./components/*.vue"`
- 功能模块导出: `"./string": "./string.js"`

### 6. .gitignore - 版本控制忽略

**作用**: 定义 Git 应该忽略的文件

**主要忽略**:
- 日志文件: `*.log`
- 依赖目录: `node_modules`
- 构建输出: `dist`, `dist-ssr`
- 缓存文件: `.turbo`, `*.tsbuildinfo`
- 编辑器配置: `.vscode/*`, `.idea`
- 本地配置: `*.local`

## 🚀 配置优势

### 1. 构建性能
- **智能缓存**: Turborepo 自动缓存构建结果
- **并行执行**: 独立任务自动并行执行
- **增量构建**: 只重新构建变更的部分

### 2. 开发体验
- **统一命令**: 所有项目使用相同的命令结构
- **实时同步**: 内部包修改立即反映到应用中
- **代码质量**: 统一的 lint 和 format 配置

### 3. 依赖管理
- **工作空间**: 使用 `workspace:*` 引用内部包
- **版本控制**: 统一的版本管理
- **依赖图**: 自动处理包之间的依赖关系

### 4. 团队协作
- **标准化**: 所有项目使用相同的配置结构
- **文档化**: 详细的配置说明和最佳实践
- **可维护性**: 清晰的配置组织和注释

## 📚 相关文档

- [TURBO_CONFIG_EXPLAINED.md](./TURBO_CONFIG_EXPLAINED.md) - turbo.json 详细说明
- [PACKAGE_JSON_EXPLAINED.md](./PACKAGE_JSON_EXPLAINED.md) - 根目录 package.json 详细说明
- [APPS_PACKAGE_JSON_EXPLAINED.md](./APPS_PACKAGE_JSON_EXPLAINED.md) - 应用 package.json 详细说明
- [PACKAGES_PACKAGE_JSON_EXPLAINED.md](./PACKAGES_PACKAGE_JSON_EXPLAINED.md) - 包 package.json 详细说明
- [GITIGNORE_EXPLAINED.md](./GITIGNORE_EXPLAINED.md) - .gitignore 详细说明
- [TURBO_GUIDE.md](./TURBO_GUIDE.md) - Turborepo 使用指南

## 🎯 快速开始

1. **安装依赖**: `pnpm install`
2. **启动开发**: `pnpm dev`
3. **构建项目**: `pnpm build`
4. **代码检查**: `pnpm lint`
5. **格式化代码**: `pnpm format`

## 🔍 配置检查

使用以下命令检查配置是否正确：

```bash
# 检查 Turborepo 配置
npx turbo run build --dry-run

# 检查工作空间
pnpm list --depth=0

# 检查依赖关系
npx turbo run lint --dry-run
```

## 💡 最佳实践

1. **保持一致性**: 所有项目使用相同的脚本结构
2. **合理缓存**: 为不同类型的任务配置合适的缓存策略
3. **依赖管理**: 优先使用内部包，避免重复依赖
4. **文档维护**: 及时更新配置说明和最佳实践
5. **版本控制**: 使用语义化版本号管理包版本

---

🎉 **恭喜！你的 Turborepo 配置已经完成，可以享受高效的 monorepo 开发体验了！** 