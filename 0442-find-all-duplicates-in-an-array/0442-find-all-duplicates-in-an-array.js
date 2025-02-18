/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let og = new Set();
    let dup = new Set();

    for (let num of nums) {
        if (og.has(num)) {
            dup.add(num);
        } else {
            og.add(num);
        }
    }

    return [...dup]; 
};
