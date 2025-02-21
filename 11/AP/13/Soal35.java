public class Soal35
{
    public static void main(String[] args)
    {
        int[] list1 = {13, 11, 22, 13, 45};
        int total = 0;

        for (int item : list1)
        {
            if (item != 13)
            {
                total += item;
            }
        }

        System.out.println(total);
    }
}