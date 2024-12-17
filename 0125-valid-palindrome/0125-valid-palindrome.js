/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
            let a= s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
             let b=  a.split('').reverse().join('')
            if(b==a){
                return true
            }else{
                return false
            }
    
};