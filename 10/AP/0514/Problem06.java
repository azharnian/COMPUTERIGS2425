public class Problem06
{
    public static void main(String[] args)
    {
        int[] list = {2, 1, 4, 1, 1, 1};
        int target = 1;

        int count = 0;
        for (int n : list)
        {
            if (n == target)
            {
                count = count + 1;
            }
            else 
            {
                count = 0;
            }
        }
        System.out.println(count);
    }
}