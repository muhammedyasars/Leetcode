public class Solution {
      public bool IsThree(int n) {
        double sqr = Math.Sqrt(n);

        if (sqr != (int)sqr) {
            return false;
        }

        return IsPrime((int)sqr);
    }

    private bool IsPrime(int num) {
        if (num <= 1) return false;

        for (int i = 2; i <= Math.Sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}