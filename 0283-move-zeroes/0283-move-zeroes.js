/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
      let a=nums.filter((a)=>a!=0)

      let b=nums.filter((a)=>a==0)
      let ab=[...a,...b]
       return nums.splice(0,nums.length,...ab)

};