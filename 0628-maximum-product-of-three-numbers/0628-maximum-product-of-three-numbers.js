// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maximumProduct = function(nums) {
//     let sum = nums.shift(); 
//     for(let i = 0; i < nums.length; i++) {
//         sum = sum * nums[i];
//     }
//     return sum;
// };


var maximumProduct = function(nums) {
    let max1 = -Infinity
    let max2 = -Infinity
    let  max3 = -Infinity;
    let min1 = Infinity
    let  min2 = Infinity;

    for (let num of nums) {
        if (num > max1) {
            [max1, max2, max3] = [num, max1, max2];
        } else if (num > max2) {
            [max2, max3] = [num, max2];
        } else if (num > max3) {
            max3 = num;
        }

        if (num < min1) {
            [min1, min2] = [num, min1];
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};
