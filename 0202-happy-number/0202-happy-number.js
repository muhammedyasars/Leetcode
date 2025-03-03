var isHappy = function(n) {
    let seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = n.toString()
             .split('')
             .map(num => Number(num) ** 2)
             .reduce((sum, num) => sum + num, 0);
    }
    
    return n === 1;
};