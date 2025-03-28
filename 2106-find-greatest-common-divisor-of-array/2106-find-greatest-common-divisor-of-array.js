/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let maxNum=Math.max(...nums);
    let minNum=Math.min(...nums);
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    return gcd(maxNum, minNum);
};