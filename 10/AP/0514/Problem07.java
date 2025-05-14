public class Problem07
{
    public static void main(String[] args)
    {
        int[] list = {2, 34, 356, 54};
        int target = 356;

        int index = 0;
        int foundIndex = -1;
        for (int n : list)
        {
            index++;
            if (n == target)
            {
                foundIndex = index;
            }
            else
            {
                foundIndex = -1;
            }

        }
        System.out.println(foundIndex);
    }
}