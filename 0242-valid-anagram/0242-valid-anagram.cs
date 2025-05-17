public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;

        char[] charArray1 = s.ToCharArray();
        char[] charArray2 = t.ToCharArray();

        Array.Sort(charArray1);
        Array.Sort(charArray2);

        string sortedS = new string(charArray1);
        string sortedT = new string(charArray2);

        return sortedS == sortedT;
    }
}
