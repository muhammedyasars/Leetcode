var subtractProductAndSum = function(n) {
    let digits = n.toString().split('').map(Number);
    
    let product = digits.reduce((a, d) => a * d, 1);
    
    let sum = digits.reduce((a, d) => a + d, 0);
    
    return product - sum;
};
