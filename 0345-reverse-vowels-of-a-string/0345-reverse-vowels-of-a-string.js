/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
    let arr = s.split("");
    let left = 0
    let right = s.length - 1;
    
    while (left < right) {
        while (left < right && !vowels.has(arr[left])) left++;
        while (left < right && !vowels.has(arr[right])) right--;
        
        [arr[left], arr[right]] = [arr[right], arr[left]];
        
        left++;
        right--;
    }
    
    return arr.join(""); 
};
