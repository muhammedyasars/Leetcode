/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let arr=grid.flat(Infinity);
    return arr.filter((num)=>num<0).length
};