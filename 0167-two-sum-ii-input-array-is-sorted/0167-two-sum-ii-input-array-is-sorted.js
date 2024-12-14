/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
        const map = new Map(); 
    for (let i = 0; i < numbers.length; i++) {
        const a = target - numbers[i];
        if (map.has(a)) {
            return [map.get(a), i+1]; 
        }
        map.set(numbers[i], i+1); 
    }
    return []; 
};