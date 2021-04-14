function solution(nums){
  
    if(nums === null) {
      return [];
    }
    
    let isSorted = false;
    while(!isSorted) {
      isSorted = true;
      for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i + 1]) {
          swap(i, i+1, nums) 
          isSorted = false;
        }
      }
     
    }
     return nums
   }
  
  function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }