/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let res = {};
    
    for (let num of nums) {
        res[num] = (res[num]+1 || 1);
    }

    for (let count of Object.values(res)) {
        if (count % 2 !== 0) {
            return false;
        }
    }
    
    return true;
};
