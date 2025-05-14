public class Problem13
{
    public static void main(String[] args)
    {
        int x = 3;
        for (int i = 0; i < 4; i++)
        {
            x += 1;
            for (int j = 0; j < 2; j++)
            {
                x += 1;
            }
        }
        System.out.println(x);
    }
}