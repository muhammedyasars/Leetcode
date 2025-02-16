/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let c=celsius
   let k=c+273.15
   let f=(c*9/5)+32
   console.log(f)
   return [parseFloat(k.toFixed(5)), parseFloat(f.toFixed(5))];

    
};