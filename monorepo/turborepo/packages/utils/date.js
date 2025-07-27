/**
 * 日期工具函数
 */

/**
 * 格式化日期
 * @param {Date|string|number} date 
 * @param {string} format 
 * @returns {string}
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''

  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

/**
 * 获取相对时间
 * @param {Date|string|number} date 
 * @returns {string}
 */
export function getRelativeTime(date) {
  const now = new Date()
  const target = new Date(date)
  const diff = now - target

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}天前`
  if (hours > 0) return `${hours}小时前`
  if (minutes > 0) return `${minutes}分钟前`
  return '刚刚'
}

/**
 * 检查是否为今天
 * @param {Date|string|number} date 
 * @returns {boolean}
 */
export function isToday(date) {
  const today = new Date()
  const target = new Date(date)
  return today.toDateString() === target.toDateString()
}

/**
 * 获取日期范围
 * @param {number} days 
 * @returns {Array}
 */
export function getDateRange(days = 7) {
  const dates = []
  const today = new Date()

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    dates.push(date)
  }

  return dates
} 