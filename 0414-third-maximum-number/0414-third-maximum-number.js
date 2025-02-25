/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let arr=nums.sort((a,b)=>b-a);
    let res=[...new Set(nums)];
    if(res.length<=2){
        return res[0]
    }else if(res.length<3){
        return res[1]
    }
    return res[2]
};