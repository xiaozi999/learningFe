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
//1.设置快慢指针，慢指针永远指向 0，快指针遍历数组用
//2.如果快指针当前数字不为 0 慢指针就++直到找到 0 此时慢指针就会跟着 0 走
//3.当快指针当前数字不为 0 的时候进行判断，如果快慢指针不同就代表快指针现在指向非 0 慢指针指向的是 0，交换两者位置
//4.交换后慢指针+1 一定会指向 0。



