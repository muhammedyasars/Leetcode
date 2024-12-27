/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let i = a.length - 1; // String 'a' nte last index
    let j = b.length - 1; // String 'b' nte last index
    let carry = 0; // Initial carry = 0
    let result = ""; // Final answer store cheyyan

    while (i >= 0 || j >= 0 || carry > 0) {
        let digitA = i >= 0 ? parseInt(a[i]) : 0; // ithu 'a' ninte current digit
        let digitB = j >= 0 ? parseInt(b[j]) : 0; // ithu 'b' ninte current digit

        let sum = digitA + digitB + carry; // Add cheyyanam
        result = (sum % 2) + result; // Resultinte part add cheyyuka
        carry = Math.floor(sum / 2); // New carry calculate cheyyuka

        i--; // Move to previous digit
        j--; // Move to previous digit
    }

    return result;
}
