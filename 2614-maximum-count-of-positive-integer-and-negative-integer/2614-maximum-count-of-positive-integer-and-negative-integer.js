/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let negcount=0;
    let poscount=0;
    let res=nums.filter((a)=>a!=0)
    for(let num of res){
        if(num<1){
          negcount++;
        }else{
            poscount++;
        }
    }
    if(negcount<poscount){
        return poscount;
    }
    return negcount
};