/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let a=sentences
    let b=a.map(a=>a.split(' ').length)
    return Math.max(...b)
    
    
};