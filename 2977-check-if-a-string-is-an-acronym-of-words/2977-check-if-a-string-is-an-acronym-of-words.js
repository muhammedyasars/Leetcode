/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let arr=[];
    for(let i=0;i<words.length;i++){
        arr.push(words[i].charAt(0))
    }
       return arr.join("")==s
};