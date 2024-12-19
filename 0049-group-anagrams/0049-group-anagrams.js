/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        const groups = {}; 
  
    strs.forEach(word => {
      const setted = word.split('').sort().join('');
      if (!groups[setted]) {
        groups[setted] = [];
      }
      groups[setted].push(word);
    });
  
    return Object.values(groups);
};