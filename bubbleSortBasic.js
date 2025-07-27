/**
 * 基础冒泡排序实现
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 * 稳定性：稳定排序算法
 */

/**
 * 冒泡排序 - 基础版本
 * @param {number[]} arr 待排序的数字数组
 * @returns {number[]} 排序后的数组
 */
function bubbleSort(arr) {
  const n = arr.length;
  
  // 外层循环控制排序轮数
  for (let i = 0; i < n - 1; i++) {
    // 内层循环进行相邻元素比较
    for (let j = 0; j < n - 1 - i; j++) {
      // 如果前一个元素大于后一个元素，则交换
      if (arr[j] > arr[j + 1]) {
        // 交换元素
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}

// 测试用例
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('原数组:', testArray);

const sortedArray = bubbleSort([...testArray]); // 使用副本避免修改原数组
console.log('排序后:', sortedArray);

// 导出函数（如果在 Node.js 环境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = bubbleSort;
}
