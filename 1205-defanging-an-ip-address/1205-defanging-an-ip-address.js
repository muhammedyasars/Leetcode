/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let newAddress = [];

    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            newAddress.push("[.]");
        } else {
            newAddress.push(address[i]);
        }
    }

    return newAddress.join(""); 
};
