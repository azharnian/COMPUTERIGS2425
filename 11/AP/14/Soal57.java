import java.util.*;
public class Soal57
{

    public static void main(String[] args)
    {
        int[] list1 = {23, 67, 3};
        System.out.println(mystery(list1));
    }

    public static int mystery(int[] num)
    {
        int max = num[0];
        for (int item : num)
        {
            if (item > max)
                max = item;
        }
        return max;
    }
}