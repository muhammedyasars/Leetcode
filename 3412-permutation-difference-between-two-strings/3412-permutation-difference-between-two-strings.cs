public class Solution
{
    public int FindPermutationDifference(string s, string t)
    {
        List<int> arr = new List<int>();
        
        for (int i = 0; i < s.Length; i++)
        {
            for (int j = 0; j < t.Length; j++)
            {
                if (s[i] == t[j])
                {
                    arr.Add(i - j);
                }
            }
        }
        
        
        int res = arr.Select(Math.Abs).Sum();
        
        return res;
    }
}