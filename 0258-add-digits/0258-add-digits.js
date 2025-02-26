/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    let a=num.toString().split("").reduce((a,b)=>Number(a)+Number(b),0)
    let b=a.toString().split("").reduce((a,b)=>Number(a)+Number(b),0)
    let c=b.toString().split("").reduce((a,b)=>Number(a)+Number(b),0)
    return c
    // if(b==10){
    //     return 1
    // }else if(b==11){
    //     return 2
    // }
    // return b
    
    
    
};