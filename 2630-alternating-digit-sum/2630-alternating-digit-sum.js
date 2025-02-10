/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let arr=n.toString().split('').map(Number)
    let count=0
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            count +=arr[i]
        }else{
            count -=arr[i]
        }
    }
    return count
};