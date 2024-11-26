/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

    const n1 = num1.length, n2 = num2.length;
    const result = new Array(n1 + n2).fill(0)

    for (let i = n1 - 1; i >= 0; i--) {

        for (let j = n2 - 1; j >= 0; j--) {
            
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1]; 
            result[i + j + 1] = sum % 10; 
            result[i + j] += Math.floor(sum / 10); 
        }
    }
    while (result[0] === 0) {
        result.shift();
    }

    return result.join('');
}