import java.util.*;

public class Soal29{
    public static void main(String[] args)
    {
        ArrayList<Integer> nums = new ArrayList<Integer>(Arrays.asList(1, 1, 3, 5, 6));
        System.out.println(mystery(nums));
    }

    public static int mystery(ArrayList<Integer> list)
    {
        int total = 0;
        for(int item : list)
        {
            total += item;
        }
        return total;
    }
}