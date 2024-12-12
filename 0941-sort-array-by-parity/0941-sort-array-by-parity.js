/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
      let a= nums.filter((a)=>a%2==0)
  let b= nums.filter((a)=>a%2!=0)
    return [...a,...b]
};