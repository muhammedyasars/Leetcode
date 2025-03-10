/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let freq = {};
    
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let count of Object.values(freq)) {
        if (count % 2 !== 0) {
            return false;
        }
    }
    
    return true;
};
