public class Solution {

public int DifferenceOfSum(int[] nums)
{
    int totalSum = nums.Sum(); // Sum of all elements

    int digitSum = nums
        .SelectMany(n => n.ToString().Select(ch => int.Parse(ch.ToString())))
        .Sum(); // Flatten digits and sum

    return totalSum - digitSum;
}
}
