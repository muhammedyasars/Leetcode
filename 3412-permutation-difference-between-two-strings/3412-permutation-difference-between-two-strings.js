/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                arr.push([i-j]);
            }
        }
    }
    
    let res=arr.flat(Infinity).reduce((a,b)=>Math.abs(a)+Math.abs(b))
    return res;
};
