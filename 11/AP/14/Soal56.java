public class Soal56
{
    public static void main(String[] args)
    {
        int[] list1 = {13, 11, 22, 13, 45};
        System.out.println(mystery(list1));

    }

    public static boolean mystery(int[] list1)
    {
        if (list1[0] == list1[list1.length - 1])
        {
            return true;
        }
        return false;
    }
}