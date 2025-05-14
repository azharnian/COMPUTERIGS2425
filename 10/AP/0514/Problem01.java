public class Problem01
{

    public static void main(String[] args)
    {
        int[] list = {1, 2, 3, 4, 5, 6, 7, 8, 9};

        for(int item : list)
        {
            if (item % 3 == 0 && item > 0 && item < 9)
            {
                System.out.println("BINGO");
            }
        }
    }
}