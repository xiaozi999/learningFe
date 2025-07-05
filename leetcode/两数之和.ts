function twoSum(nums: number[], target: number): number[] {
  const map=new Map()
  const length=nums.length
  for(let i=0;i<length;i++){
    const currentNum=nums[i]
    const index=map.get(target-currentNum)
    if(index!==undefined){
      return [index,i]
    }
    map.set(nums[i],i)
  }
  return [-1,-1]
};

//1.利用 map 颠倒下标以及值，将值当做 key，v下标为 value
//2.如果将当前的 target 目标值减去当前遍历到的数字作为 key在 map 里面有值的话，那么对应的值就是要找的第一个下标，
//当前遍历到的下标就是要返回的第二个下标。