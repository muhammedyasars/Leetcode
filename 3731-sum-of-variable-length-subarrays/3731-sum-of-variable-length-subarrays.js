var subarraySum = function(nums) {
    let totalSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let start = Math.max(0, i - nums[i]);
        let subSum = 0;

        for (let j = start; j <= i; j++) {
            subSum += nums[j];
        }

        totalSum += subSum; 
    }

    return totalSum;
};

