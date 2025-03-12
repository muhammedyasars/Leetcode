/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let res = {};
    let sum = 0;  
    
    for (let num of nums) {
        res[num] = (res[num]+1 || 1);
    }

    for (let num in res) {
        if (res[num] === 1) {
            sum += parseInt(num);
        }
    }
    return sum

    
};