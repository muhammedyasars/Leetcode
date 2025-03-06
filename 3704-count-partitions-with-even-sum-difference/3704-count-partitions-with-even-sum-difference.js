/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let count = nums.reduce((a,b)=>a+b,0)
    if(count%2==0){
        return nums.length-1
    }
     return 0
  
    
};