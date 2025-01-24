/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    const sqr = Math.sqrt(n);

    if (sqr % 1 != 0) {
        return false; 
    }

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false; 
            }
        }
        return true; 
    }

    return isPrime(sqr); 

};