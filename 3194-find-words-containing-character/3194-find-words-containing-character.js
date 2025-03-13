/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr=[];
    let sam;
    let sam1;
    for(let i=0;i<words.length;i++){
        sam=new Set(words[i].split(''))
        sam1=[...sam]
        for(let j=0;j<sam1.length;j++){
             if(sam1[j]==x){
                arr.push(i)
             }
        }
    }
    return arr
};