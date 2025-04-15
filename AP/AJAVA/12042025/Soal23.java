public class Soal23
{
    public static void main(String[] args)
    {
        ReducedFraction fraction = new ReducedFraction(10, 20);

    }
}

class Fraction
{
    int N;
    int D;

    public Fraction(int n, int d)
    {
        N = n;
        D = d;
    }
}

class ReducedFraction extends Fraction
{
    int rN;
    int rD;

    public ReducedFraction(int n, int d)
    {
        super(n, d);
        // N = n;
        // D = d;
        rN = n;
        rD = d;
    }
}