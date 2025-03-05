public class Soal50
{
    public static void main(String[] args)
    {
        int temp = 132;
        System.out.println(convertApproxTemp(temp));
    }

    public static int convertApproxTemp(int temp)
    {
        return ( (5 * (temp -32) / 10) );
    }
}