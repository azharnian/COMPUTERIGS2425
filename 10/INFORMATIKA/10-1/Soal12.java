import java.util.Scanner;

public class Soal12
{

    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        int num = console.nextInt();
        if (num >= 0 && num <= 10)
        {
            System.out.println("Waffles");
        }

        if (num >= 11 && num <= 20)
        {
            System.out.println("Novack");
        }

        if (num > 20)
        {
            System.out.println("Benji");
        }
        console.close();
    }
}