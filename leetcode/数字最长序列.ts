function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  const numSet = new Set(nums);
  let maxLength = 0;
  
  for (const num of numSet) {
    if(!numSet.has(num-1)){ 
      let currentNum=num
      let currentLength=1;
      while(numSet.has(currentNum+1)){
        currentNum++;
        currentLength++;
      }
      maxLength=Math.max(maxLength,currentLength)
    }
  }
  
  return maxLength;
};
//1.先用 set 将数组去重
//2.遍历 set 在 set 中找到没有没有本身-1 的数，那么这个数就是起点
//3.当找到本身+1的数字后 将新数字赋值给字段，继续利用 set 寻找新数字+1 的数
