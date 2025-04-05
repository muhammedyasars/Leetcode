public class Solution {
    public bool IsPalindrome(int x) {
        if (x < 0) return false;

        string original = x.ToString();         
        char[] arr = original.ToCharArray();
        Array.Reverse(arr);                
        string reversed = new string(arr);

        return original == reversed;
    }
}
