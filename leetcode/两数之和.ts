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