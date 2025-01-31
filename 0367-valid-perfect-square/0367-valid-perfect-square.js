/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let a=Math.sqrt(num)
     if(a%1==0){
        return true
     }else {
        return false
     }
};