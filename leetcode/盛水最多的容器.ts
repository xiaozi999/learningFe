function maxArea(height: number[]): number {
  let maxVol = 0
  let left = 0
  let right = height.length - 1
  
  while (left < right) {
    const width = right - left
    const minHeight = Math.min(height[left], height[right])
    const currentVol = width * minHeight
    maxVol = Math.max(maxVol, currentVol)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  
  return maxVol
}

  //1.双指针的思路正确，left 设置为 0，right 设置为 length-1
  //2.错误的将left 与 left+1 比较，right 与 right—1比较，这样只会变得更复杂
  //3.不应该提前在乎指针的移动是否会让面积变大还是变小，因为每次都会比较最大值，只需要让左右指针不断移动至相遇即可遍历出所有情况。
  //4.正确的思路应该只让 left 与 right 比较 如果 left 大于 right right-- 否则 left++
  //5.选择移动指针后的 left 和 right 中的较小值，与 width 相乘