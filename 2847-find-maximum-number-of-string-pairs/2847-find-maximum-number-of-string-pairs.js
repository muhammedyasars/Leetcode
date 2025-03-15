/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let count=0;
    let arr=[]
    for(let i=0;i<words.length;i++){
         count=words[i].split('').sort().join('')
        arr.push(count)
    }
    count=0
    for(let i=0;i<words.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i]==arr[j]){
                count++
            }
        }
    }
    return count
};