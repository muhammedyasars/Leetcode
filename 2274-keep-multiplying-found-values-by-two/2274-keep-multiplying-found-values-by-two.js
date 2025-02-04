/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let b = original; 

    while(nums.includes(b)) { 
        b =b * 2;
    }

    return b; 
};
