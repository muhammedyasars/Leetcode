/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]==nums[j]){
                arr.push(nums[i])
            }
        }
        
    }
    return arr
};