public class Soal2{
    public static void main(String[] args)
    {
        int x = 6;
        int y = 12;
        int z = 24;

        if (y % x == 0)
        {
            x = y;
        }

        if (z % x == 0)
        {
            z = x;
        }
        System.out.println(x + " " + y + " " + z);
    }
}