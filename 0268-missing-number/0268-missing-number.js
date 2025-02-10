/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
     let n=nums.length;
let expectedsum=(n*(n+1)/2)
let originalsum=nums.reduce((acc,curr)=>acc+curr,0)
return expectedsum-originalsum;
};