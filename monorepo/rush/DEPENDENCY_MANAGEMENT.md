# Rush 依赖管理说明

## 🔍 问题解答：为什么 Vite 不在根目录安装？

在 Rush 中，依赖管理的方式与传统 monorepo 工具（如 pnpm workspace）不同。让我详细解释：

## 📋 Rush 依赖管理机制

### 1. **Rush 的依赖管理特点**

#### ✅ 集中化版本管理
- 使用 `common-versions.json` 统一管理版本
- 所有项目共享相同的依赖版本
- 避免版本冲突和不一致

#### ✅ 项目级隔离
- 每个项目有自己的 `node_modules`
- 依赖在项目级别安装，但版本统一
- 提供更好的隔离性和安全性

#### ✅ 智能依赖解析
- Rush 自动解析依赖关系
- 确保所有项目使用兼容的版本
- 支持增量安装和缓存

### 2. **当前配置结构**

```
rush/
├── package.json                    # 根目录：共享依赖和脚本
├── common/config/rush/
│   └── common-versions.json       # 统一版本管理
├── apps/
│   ├── vue-app/package.json       # 项目特定依赖
│   └── admin-app/package.json     # 项目特定依赖
└── packages/
    ├── ui/package.json            # 库项目依赖
    └── utils/package.json         # 库项目依赖
```

### 3. **依赖分类管理**

#### 🏠 根目录 package.json
```json
{
  "devDependencies": {
    "vue": "^3.5.17",
    "vue-router": "^4.5.1", 
    "vite": "^5.0.0",
    "@vitejs/plugin-vue": "^5.0.0",
    "vite-plugin-vue-devtools": "^7.7.7"
  }
}
```
**作用**：
- 定义共享的开发依赖
- 提供根目录级别的脚本
- 确保版本一致性

#### 📦 common-versions.json
```json
{
  "preferredVersions": {
    "vue": "^3.5.17",
    "vue-router": "^4.5.1",
    "vite": "^5.0.0",
    "@vitejs/plugin-vue": "^5.0.0",
    "vite-plugin-vue-devtools": "^7.7.7"
  }
}
```
**作用**：
- 强制所有项目使用相同版本
- 防止版本冲突
- 简化依赖管理

#### 🎯 项目级 package.json
```json
{
  "dependencies": {
    "@monorepo/ui": "workspace:*",
    "@monorepo/utils": "workspace:*"
  }
}
```
**作用**：
- 只声明项目特定的依赖
- 引用本地工作空间的包
- 保持简洁和清晰

## 🔄 依赖安装流程

### 1. **Rush 安装过程**
```bash
rush update
```

**执行步骤**：
1. 读取 `common-versions.json` 中的版本约束
2. 为每个项目创建 `node_modules`
3. 安装项目特定的依赖
4. 确保版本一致性

### 2. **依赖解析机制**
- **共享依赖**：通过 `preferredVersions` 统一版本
- **项目依赖**：在各自项目中安装
- **工作空间依赖**：使用 `workspace:*` 协议

## 🆚 与其他工具的对比

### 传统 pnpm workspace
```
monorepo/
├── package.json          # 根目录依赖
├── pnpm-workspace.yaml   # 工作空间配置
└── apps/
    └── vue-app/
        └── package.json  # 项目依赖
```

### Rush 方式
```
rush/
├── package.json              # 根目录脚本和共享依赖
├── common/config/rush/
│   └── common-versions.json  # 版本管理
└── apps/
    └── vue-app/
        └── package.json      # 项目特定依赖
```

## ✅ Rush 依赖管理的优势

### 1. **版本一致性**
- 所有项目使用相同版本的依赖
- 避免版本冲突和兼容性问题
- 简化调试和维护

### 2. **更好的隔离性**
- 每个项目有独立的 `node_modules`
- 避免依赖污染
- 提高构建的可靠性

### 3. **智能缓存**
- Rush 缓存构建结果
- 只重新构建变更的项目
- 大幅提高构建速度

### 4. **依赖分析**
- 自动分析依赖关系
- 检测循环依赖
- 提供依赖图可视化

## 🛠️ 常用命令

### 依赖管理
```bash
# 安装/更新依赖
rush update

# 强制重新安装
rush update --full

# 检查依赖一致性
rush check
```

### 构建管理
```bash
# 构建所有项目
rush build

# 构建特定项目
rush build --to vue-app

# 增量构建
rush build --incremental
```

### 依赖分析
```bash
# 列出所有项目
rush list

# 查看依赖关系
rush list --json

# 检查依赖冲突
rush check
```

## 📝 最佳实践

### 1. **依赖分类**
- **共享依赖**：放在根目录 `package.json`
- **项目特定依赖**：放在项目 `package.json`
- **版本约束**：使用 `common-versions.json`

### 2. **版本管理**
- 使用 `preferredVersions` 统一版本
- 定期更新依赖版本
- 测试版本兼容性

### 3. **工作流程**
- 使用 `rush update` 安装依赖
- 使用 `rush check` 验证配置
- 使用 `rush build` 构建项目

## 🎯 总结

Rush 的依赖管理方式虽然与传统的 monorepo 工具不同，但它提供了：

1. **更好的版本控制** - 通过 `common-versions.json` 统一管理
2. **更强的隔离性** - 每个项目独立的 `node_modules`
3. **更高的性能** - 智能缓存和增量构建
4. **更清晰的依赖关系** - 自动分析和可视化

这种方式虽然看起来复杂一些，但能够有效解决大型 monorepo 中的依赖管理问题，提供更好的开发体验和构建性能。 