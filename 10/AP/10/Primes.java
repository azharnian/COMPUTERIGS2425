public class Primes {
    public static void main(String[] args)
    {
        System.out.println(countFactors(24));
        System.out.println(isPrime(27));
        System.out.println(isPrime(47));
        System.out.println(countPrimes(24));
        System.out.println(countPrimes(1000000));
    }

    public static int countFactors(int n)
    {
        int counter = 1;
        int numFactor = 0;
        while (counter <= n)
        {
            if(n % counter == 0)
            {
                numFactor++;
            }
            counter++;
        }
        return numFactor;
    }

    /*
    public static boolean isPrime(int n)
    {
        if (countFactors(n) == 2)
            return true;
        return false;
    }
    */

   public static boolean isPrime(int n)
   {
        if (n <= 1)
            return false;
        int counter = 2;
        while (counter <= Math.floor(Math.sqrt(n)))
        {
            if (n % counter == 0)
                return false;
            counter++;
        }
        return true;
   }

    /*
    public static int countPrimes(int n)
    {
        int counter = 2;
        int numPrimes = 0;
        while (counter <= n)
        {
            if(isPrime(counter))
            {
                numPrimes++;
            }
            counter++;
        }
        return numPrimes;
    }
    */

   public static int countPrimes(int n)
   {
        if (n < 2) return 0;
        return n / (int) Math.log(n);
   }
}