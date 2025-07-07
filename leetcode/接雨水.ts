function trap(height: number[]): number {
  if (height.length <= 2) return 0
  let waterTrapped=0
  let left=0
  let right=height.length-1
  let leftMax=0
  let rightMax=0
  while(left<right){
    if(height[left]<height[right]){
      if(height[left]>=leftMax){
        leftMax=height[left]
      }else{
        waterTrapped+=leftMax-height[left]
      }
      left++
    }else{
      if(height[right]>=rightMax){
        rightMax=height[right]
      }else{
        waterTrapped+=rightMax-height[right]
      }
      right--
    }
  }
  return waterTrapped
}

  // 1.设置左右指针，左指针指向 0 右指针指向末尾
  // 2.先处理高度较小的一方，因为另一方高度较大，一定能存到水
  // 3.被处理的一方，如果当前值大于最大高度，则重设最大高度，如果小余最大高度 证明能存水，存的水为高度减当前值，两种操作最后都要让指针移动