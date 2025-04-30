public class Solution
{
   public int FindPermutationDifference(string s, string t)
    {
        List<int> differences = new List<int>();

        for (int i = 0; i < s.Length; i++)
        {
            for (int j = 0; j < t.Length; j++)
            {
                if (s[i] == t[j])
                {
                    differences.Add(i - j);
                }
            }
        }

     
        return differences.Sum(x => Math.Abs(x));
       

}
}

