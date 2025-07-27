/**
 * 字符串工具函数
 */

/**
 * 首字母大写
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 驼峰命名转短横线命名
 * @param {string} str
 * @returns {string}
 */
export function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * 短横线命名转驼峰命名
 * @param {string} str
 * @returns {string}
 */
export function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
}

/**
 * 生成随机字符串
 * @param {number} length
 * @returns {string}
 */
export function randomString(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}
