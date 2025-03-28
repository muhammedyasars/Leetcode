using System;
using System.Linq;

public class Solution {
    public int FindGCD(int[] nums) {
        int maxNum = nums.Max(); 
        int minNum = nums.Min();

        return GCD(maxNum, minNum); 
    }

    private int GCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
