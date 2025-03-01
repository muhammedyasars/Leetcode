/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charCount = new Map();

    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};
