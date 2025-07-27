# .gitignore 配置详解

## 文件概述

`.gitignore` 文件定义了 Git 应该忽略的文件和目录，确保不必要的文件不会被提交到版本控制。

## 配置详解

### 日志文件
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*
```

#### 说明
- **`logs`**: 日志目录
- **`*.log`**: 所有 .log 文件
- **`npm-debug.log*`**: npm 调试日志
- **`yarn-debug.log*`**: Yarn 调试日志
- **`yarn-error.log*`**: Yarn 错误日志
- **`pnpm-debug.log*`**: pnpm 调试日志
- **`lerna-debug.log*`**: Lerna 调试日志

#### 原因
- 日志文件通常很大且频繁变化
- 包含敏感信息（如错误堆栈）
- 每次运行都会重新生成

### 依赖和构建文件
```
node_modules
dist
dist-ssr
coverage
*.local
```

#### 说明
- **`node_modules`**: 依赖包目录
- **`dist`**: 构建输出目录
- **`dist-ssr`**: 服务端渲染构建输出
- **`coverage`**: 测试覆盖率报告
- **`*.local`**: 本地配置文件

#### 原因
- `node_modules` 可以通过 `package.json` 重新安装
- 构建文件每次构建都会重新生成
- 本地配置文件包含个人设置

### 测试相关
```
/cypress/videos/
/cypress/screenshots/
```

#### 说明
- **`/cypress/videos/`**: Cypress 测试录屏
- **`/cypress/screenshots/`**: Cypress 测试截图

#### 原因
- 测试录屏和截图文件较大
- 每次测试都会重新生成
- 通常用于调试，不需要版本控制

### 编辑器文件
```
# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

#### 说明
- **`.vscode/*`**: VS Code 配置目录
- **`!.vscode/extensions.json`**: 保留扩展推荐文件
- **`.idea`**: IntelliJ IDEA 配置目录
- **`*.suo`**: Visual Studio 用户选项文件
- **`*.ntvs*`**: Node.js Tools for Visual Studio
- **`*.njsproj`**: Node.js 项目文件
- **`*.sln`**: Visual Studio 解决方案文件
- **`*.sw?`**: Vim 交换文件

#### 原因
- 编辑器配置是个人偏好
- 不同开发者使用不同编辑器
- 避免团队冲突

### 构建缓存
```
*.tsbuildinfo
```

#### 说明
- **`*.tsbuildinfo`**: TypeScript 构建信息文件

#### 原因
- TypeScript 构建缓存文件
- 每次构建都会更新
- 可以通过重新构建生成

### Turborepo 缓存
```
# Turborepo
.turbo
```

#### 说明
- **`.turbo`**: Turborepo 缓存目录

#### 原因
- Turborepo 的本地缓存文件
- 包含构建缓存和任务缓存
- 每次构建都会更新
- 可以通过 `turbo run clean` 清理

## 最佳实践

### 1. 忽略原则
- **临时文件**: 运行时生成的临时文件
- **构建输出**: 可以通过源码重新构建的文件
- **依赖文件**: 可以通过包管理器重新安装的文件
- **个人配置**: 编辑器、IDE 等个人配置文件
- **敏感信息**: 包含密钥、密码等敏感信息的文件

### 2. 保留原则
- **配置文件**: 项目必需的配置文件
- **文档**: 项目文档和说明
- **源码**: 所有源代码文件
- **扩展推荐**: 团队共享的编辑器扩展推荐

### 3. 常见模式
```
# 忽略所有 .log 文件
*.log

# 忽略特定目录
node_modules/
dist/

# 忽略特定文件
.env.local

# 保留特定文件
!.vscode/extensions.json
```

### 4. 性能考虑
- 避免忽略过多文件，影响 Git 性能
- 使用精确的路径模式
- 定期清理不必要的忽略规则

## 与 Turborepo 的配合

### 缓存管理
- `.turbo` 目录包含 Turborepo 的缓存
- 缓存文件较大，不适合版本控制
- 可以通过 `turbo run clean` 清理

### 构建输出
- `dist` 目录包含构建输出
- 每次构建都会重新生成
- 不需要版本控制

### 依赖管理
- `node_modules` 包含所有依赖
- 可以通过 `pnpm install` 重新安装
- 不同环境可能有不同的依赖版本

## 团队协作

### 1. 统一配置
- 团队使用相同的 `.gitignore` 配置
- 避免个人配置差异
- 定期更新和维护

### 2. 文档说明
- 为复杂的忽略规则添加注释
- 说明忽略的原因和影响
- 提供清理和恢复的方法

### 3. 环境管理
- 区分开发、测试、生产环境
- 使用环境变量管理配置
- 避免硬编码敏感信息

这种配置确保了：
- 版本控制的清洁性
- 团队协作的一致性
- 构建过程的可靠性
- 开发环境的稳定性 