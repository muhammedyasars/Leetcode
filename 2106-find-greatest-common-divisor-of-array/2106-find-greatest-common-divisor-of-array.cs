using System;
using System.Linq;

public class Solution {
    public int FindGCD(int[] nums) {
        int maxNum = nums.Max();  // Get max value from array
        int minNum = nums.Min();  // Get min value from array

        return GCD(maxNum, minNum); // Compute GCD of max and min
    }

    // Helper function to compute GCD using the Euclidean algorithm
    private int GCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
