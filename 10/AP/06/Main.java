public class Main
{
    public static void main(String[] args)
    {
        int res1 = add(2, 3);
        int res2 = add(1, 2, 3);
        double res3 = add(0.5, 0.7, 10);
        System.out.println(res1+" "+res2+" "+res3);

        int a = 1, b = 2, c = 3;
        add3(a, b, c);
        System.out.println(a+" "+b+" "+c);
    }

    public static void add3(int a, int b, int c)
    {
        a += 3;
        b += 3;
        c += 3;
        System.out.println(a+" "+b+" "+c);
    }

    public static int add(int x, int y)
    {
        return x + y;
    }

    public static int add(int x, int y, int z)
    {
        return x + y + z;
    }

    public static double add(double x, double y, double z)
    {
        return x + y + z;
    }
}