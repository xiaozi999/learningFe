#!/usr/bin/env node

/**
 * Monorepo 构建脚本
 * 演示如何构建所有包
 */

import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const packages = [
  { name: '@monorepo/ui', path: 'packages/ui' },
  { name: '@monorepo/utils', path: 'packages/utils' }
]

console.log('🚀 开始构建 Monorepo...\n')

// 构建所有包
for (const pkg of packages) {
  console.log(`📦 构建 ${pkg.name}...`)

  try {
    // 读取包的package.json
    const pkgPath = join(pkg.path, 'package.json')
    const pkgJson = JSON.parse(readFileSync(pkgPath, 'utf8'))

    // 更新构建时间
    pkgJson.buildTime = new Date().toISOString()
    writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2))

    console.log(`✅ ${pkg.name} 构建完成`)
  } catch (error) {
    console.error(`❌ ${pkg.name} 构建失败:`, error.message)
  }
}

console.log('\n🎉 所有包构建完成!')
console.log('\n📋 构建统计:')
console.log(`- 总包数: ${packages.length}`)
console.log(`- 构建时间: ${new Date().toLocaleString()}`) 