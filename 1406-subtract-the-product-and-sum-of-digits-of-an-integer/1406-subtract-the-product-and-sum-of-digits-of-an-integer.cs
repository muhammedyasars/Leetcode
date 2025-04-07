public class Solution {
    public int SubtractProductAndSum(int n) {
    int product = 1;
    int sum = 0;

    foreach (char c in n.ToString())
    {
        int digit = c - '0'; 
        product =product*digit;
        sum =sum+ digit;
    }

    return product - sum;
    }
}
 

    

 
