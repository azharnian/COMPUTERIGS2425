public class Soal10{
    public static void main(String[] args)
    {
        int[] list1 = {85, 40, 79, 80, 92, 20};
        int sum = 0;
        for (int item : list1)
        {
            if (item % 5 == 0 && item % 10 == 0)
            {
                sum += 1;
            }
        }
        System.out.println(sum);
    }
}