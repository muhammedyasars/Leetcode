/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr=[];
    let count =nums[0]
    for(let i=0;i<nums.length;i++){
        arr.push(count);
        count=arr[i]+nums[i+1]
    }
    return arr
};