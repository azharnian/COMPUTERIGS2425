public class Soal22{
    public static void main(String[] args)
    {
        System.out.println(mystery(10, 3));
        System.out.println(mystery(3, 10));
        System.out.println(mystery(5, 18));
        System.out.println(mystery(18, 5));
    }

    public static boolean mystery(int a, int b)
    {
        if (a + b == 13)
            return true;
        if (a - b == 13)
            return true;
        return false;
    }
}