function moveZeroes(nums: number[]): void {
  let Index=0
  for(let i=0;i<nums.length;i++){
    if(nums[i-Index]===0){
      nums.push(0) 
      nums.splice(i-Index,1)
      Index++
    }
  }
};

function moveZeroes2(nums: number[]): void {
  let left = 0;  
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      if (left !== right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      left++;
    }
  }
}




