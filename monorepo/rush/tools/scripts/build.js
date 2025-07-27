#!/usr/bin/env node

/**
 * Rush Monorepo 构建脚本
 * 提供常用的构建和开发命令
 */

import { spawn } from 'child_process';
import path from 'path';

// 颜色输出函数
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      ...options
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    child.on('error', (error) => {
      reject(error);
    });
  });
}

async function main() {
  const command = process.argv[2];
  const args = process.argv.slice(3);

  try {
    switch (command) {
      case 'dev':
        log('🚀 启动开发模式...', 'green');
        await runCommand('rush', ['build', '--to-except', '@monorepo/ui', '@monorepo/utils']);
        log('✅ 开发模式启动完成', 'green');
        break;

      case 'build':
        log('🔨 构建所有项目...', 'blue');
        await runCommand('rush', ['build']);
        log('✅ 构建完成', 'green');
        break;

      case 'clean':
        log('🧹 清理构建文件...', 'yellow');
        await runCommand('rush', ['purge']);
        log('✅ 清理完成', 'green');
        break;

      case 'update':
        log('📦 更新依赖...', 'cyan');
        await runCommand('rush', ['update']);
        log('✅ 依赖更新完成', 'green');
        break;

      case 'check':
        log('🔍 检查项目配置...', 'magenta');
        await runCommand('rush', ['check']);
        log('✅ 检查完成', 'green');
        break;

      case 'list':
        log('📋 列出所有项目...', 'blue');
        await runCommand('rush', ['list']);
        break;

      case 'help':
      case '--help':
      case '-h':
        showHelp();
        break;

      default:
        log('❌ 未知命令', 'red');
        showHelp();
        process.exit(1);
    }
  } catch (error) {
    log(`❌ 命令执行失败: ${error.message}`, 'red');
    process.exit(1);
  }
}

function showHelp() {
  log('\n🔧 Rush Monorepo 构建脚本', 'bright');
  log('=====================================\n');

  log('可用命令:', 'cyan');
  log('  dev     - 启动开发模式 (构建应用项目)', 'green');
  log('  build   - 构建所有项目', 'green');
  log('  clean   - 清理构建文件和缓存', 'green');
  log('  update  - 更新所有项目依赖', 'green');
  log('  check   - 检查项目配置和依赖关系', 'green');
  log('  list    - 列出所有项目', 'green');
  log('  help    - 显示帮助信息', 'green');

  log('\n示例:', 'cyan');
  log('  node tools/scripts/build.js dev', 'yellow');
  log('  node tools/scripts/build.js build', 'yellow');
  log('  node tools/scripts/build.js clean', 'yellow');

  log('\n项目特定命令:', 'cyan');
  log('  rush build --to vue-app     # 构建 vue-app 及其依赖', 'yellow');
  log('  rush build --to admin-app   # 构建 admin-app 及其依赖', 'yellow');
  log('  rushx dev                   # 在项目目录中运行开发服务器', 'yellow');

  log('\n更多信息请查看 README.md', 'blue');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { runCommand, log }; 