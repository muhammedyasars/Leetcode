public class Solution {
    int sam;
    public int AverageValue(int[] nums) {
 var filteredNums = nums.Where(s => s % 2 == 0 && s % 3 == 0).ToList();
        
        if (filteredNums.Count == 0) return 0;

        return (int)filteredNums.Average();
    }
}