public class Soal31
{
    public static void main(String[] args)
    {
        int[] list1 = {1, 1, 2, 2};
        int[] list2 = {12, 31, 35, 67};

        int count = list1.length;
        int number = 0;
        int total = 0;

        for (int i = 0; i < count; i++)
        {
            if (list2[number] % list1[number] == 0)
            {
                total += list2[number];
                number += 1;
            }
        }
        System.out.println(total);
    }
}