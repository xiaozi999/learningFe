# Turborepo 使用指南

## 🎯 转换完成

你的 monorepo 已经成功转换为 Turborepo 结构！

## 📁 项目结构

```
turborepo/
├── apps/
│   ├── vue-app/          # Vue 应用
│   └── admin-app/        # 管理后台应用
├── packages/
│   ├── ui/               # UI 组件库
│   ├── utils/            # 工具函数库
│   └── config/           # 共享配置
├── tools/
│   └── scripts/          # 构建脚本
├── turbo.json            # Turborepo 配置
├── pnpm-workspace.yaml   # 工作空间配置
└── package.json          # 根目录配置
```

## 🚀 主要改进

### 1. 构建性能优化
- **智能缓存**: Turborepo 自动缓存构建结果
- **并行执行**: 独立任务自动并行执行
- **增量构建**: 只重新构建变更的部分

### 2. 依赖管理
- **工作空间**: 使用 `workspace:*` 语法
- **依赖图**: 自动处理包之间的依赖关系
- **版本管理**: 统一的版本控制

### 3. 开发体验
- **统一命令**: 所有项目使用相同的命令
- **过滤执行**: 支持 `--filter` 参数
- **任务管道**: 定义清晰的任务依赖关系

## 📋 常用命令

### 开发
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

# 预览构建结果
pnpm preview
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

### Turborepo 特定命令
```bash
# 查看任务执行计划
npx turbo run build --dry-run

# 清理缓存
npx turbo run clean

# 查看缓存状态
npx turbo run build --dry-run
```

## ⚙️ 配置文件说明

### turbo.json
```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

- `dependsOn`: 定义任务依赖关系
- `outputs`: 指定构建输出目录
- `cache`: 是否启用缓存
- `persistent`: 是否为持久任务（如开发服务器）

### pnpm-workspace.yaml
```yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'tools/*'
```

定义了工作空间的范围，支持通配符模式。

## 🔧 高级功能

### 1. 缓存策略
- **本地缓存**: 存储在 `.turbo` 目录
- **远程缓存**: 可配置远程缓存服务器
- **缓存键**: 基于文件内容和依赖关系

### 2. 任务依赖
- `^build`: 依赖所有上游包的 build 任务
- `build`: 依赖当前包的 build 任务
- 自动解析依赖图

### 3. 环境变量
- `globalEnv`: 全局环境变量
- `env`: 任务特定的环境变量
- `passThroughEnv`: 透传的环境变量

## 🎉 下一步

1. **安装依赖**: `pnpm install`
2. **启动开发**: `pnpm dev`
3. **构建项目**: `pnpm build`
4. **代码检查**: `pnpm lint`

## 📚 学习资源

- [Turborepo 官方文档](https://turbo.build/repo/docs)
- [Monorepo 最佳实践](https://turbo.build/repo/docs/handbook)
- [缓存策略](https://turbo.build/repo/docs/core-concepts/caching)
- [任务管道](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)

---

🎊 **恭喜！你的 monorepo 已经成功升级为 Turborepo！** 