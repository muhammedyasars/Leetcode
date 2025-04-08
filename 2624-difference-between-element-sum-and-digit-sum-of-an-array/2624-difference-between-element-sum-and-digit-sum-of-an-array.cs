public class Solution {

public int DifferenceOfSum(int[] nums)
{
    int totalSum = nums.Sum(); 

    int digitSum = nums
        .SelectMany(n => n.ToString().Select(ch => int.Parse(ch.ToString())))
        .Sum();

    return totalSum - digitSum;
}
}
