#!/usr/bin/env node

/**
 * Rush Monorepo 开发脚本
 * 用于启动开发服务器和开发工具
 */

import { spawn } from 'child_process';
import { readdir } from 'fs/promises';
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

async function getAppProjects() {
  try {
    const appsDir = path.join(process.cwd(), 'apps');
    const entries = await readdir(appsDir, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
  } catch (error) {
    log('❌ 无法读取 apps 目录', 'red');
    return [];
  }
}

async function startDevServer(projectName) {
  const projectPath = path.join(process.cwd(), 'apps', projectName);

  log(`🚀 启动 ${projectName} 开发服务器...`, 'green');

  try {
    // 切换到项目目录并启动开发服务器
    await runCommand('rushx', ['dev'], {
      cwd: projectPath,
      stdio: 'inherit'
    });
  } catch (error) {
    log(`❌ ${projectName} 启动失败: ${error.message}`, 'red');
  }
}

async function main() {
  const command = process.argv[2];
  const args = process.argv.slice(3);

  try {
    switch (command) {
      case 'start':
        const projectName = args[0];
        if (!projectName) {
          log('❌ 请指定项目名称', 'red');
          log('用法: node tools/scripts/dev.js start <project-name>', 'yellow');
          log('可用项目:', 'cyan');
          const projects = await getAppProjects();
          projects.forEach(project => log(`  - ${project}`, 'green'));
          process.exit(1);
        }
        await startDevServer(projectName);
        break;

      case 'list':
        log('📋 可用的应用项目:', 'cyan');
        const projects = await getAppProjects();
        projects.forEach(project => log(`  - ${project}`, 'green'));
        break;

      case 'build':
        log('🔨 构建所有应用项目...', 'blue');
        await runCommand('rush', ['build', '--to-except', '@monorepo/ui', '@monorepo/utils']);
        log('✅ 构建完成', 'green');
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
  log('\n🚀 Rush Monorepo 开发脚本', 'bright');
  log('=====================================\n');

  log('可用命令:', 'cyan');
  log('  start <project> - 启动指定项目的开发服务器', 'green');
  log('  list            - 列出所有可用的应用项目', 'green');
  log('  build           - 构建所有应用项目', 'green');
  log('  help            - 显示帮助信息', 'green');

  log('\n示例:', 'cyan');
  log('  node tools/scripts/dev.js start vue-app', 'yellow');
  log('  node tools/scripts/dev.js start admin-app', 'yellow');
  log('  node tools/scripts/dev.js list', 'yellow');

  log('\n手动启动开发服务器:', 'cyan');
  log('  cd apps/vue-app && rushx dev', 'yellow');
  log('  cd apps/admin-app && rushx dev', 'yellow');

  log('\n更多信息请查看 README.md', 'blue');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { runCommand, log, getAppProjects, startDevServer }; 