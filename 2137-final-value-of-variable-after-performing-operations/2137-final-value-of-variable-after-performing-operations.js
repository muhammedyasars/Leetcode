/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x=0;
    let a=operations
    for(let i=0;i<a.length;i++){
        if(a[i]=="--X"||a[i]=="X--"){
            x=x-1
        }else{
            x=x+1
        }
    }
    return x
};