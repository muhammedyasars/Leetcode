// /**
//  * @param {string} s
//  * @return {number}
//  */
// var firstUniqChar = function(s) {
//     for (let i = 0; i < s.length; i++) {
//         let count = 0;
//         for (let j = 0; j < s.length; j++) {
//             if (s[i] === s[j]) {
//                 count++;
//             }
//         }
//         if (count === 1) {
//             return i
//         } 
//     }
//     return -1
// };

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
