var makeFancyString = function(s) {
    let result = [];
    let count = 1;

    result.push(s[0]); 
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        
        if (count < 3) {
            result.push(s[i]);
        }
    }

    return result.join('');
};

