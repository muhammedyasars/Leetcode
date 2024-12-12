/**
 * @param {string} s
 * @return {string}
 */
function clearDigits(s) {
    const arr = [];
    for (const char of s) {
        if (/\d/.test(char)) { 
            if (arr.length > 0)
                arr.pop();
            } else {
            arr.push(char);
        }
    }
    return arr.join(''); 
}