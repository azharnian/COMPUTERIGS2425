public class Soal72{

    public static void main(String[] args)
    {
        int[] list = {11, 35, 6, 0};
        System.out.println(mystery(list));
    }

    public static int mystery(int[] list)
    {
        int sum = 0;
        for (int i = 0; i < list.length; i++)
        {
            sum += list[i];
        }
        return sum/list.length;
    }
}