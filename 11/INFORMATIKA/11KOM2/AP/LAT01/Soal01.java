public class Soal01{

    public static void main(String[] args)
    {
        int num = 1;
        while(num <= 10)
        {
            if(num % 3 == 0)
            {
                System.out.print(num+" ");
            }
            num += 2;
        }
    }

}