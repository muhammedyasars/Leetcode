/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let sam;
    let mas;
    for(let i=0;i<words.length;i++){
         sam=words[i].split('').reverse().join('')
         mas=words[i]
        if(sam==mas){
            return mas
        }
    }
     if(sam!=mas){
        return ''
     }
};