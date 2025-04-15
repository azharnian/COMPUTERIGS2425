public class Soal3
{
    public static void main(String[] args)
    {
        mystery(3);
    }

    public static void mystery (int n)
    {
        int k;
        for (k = 0; k < n; k++)
        {
            System.out.println("Stack " + k);
            mystery(k);
            System.out.println("Stack " + k);
            System.out.println(k);
        }
        System.out.println();
    }
}