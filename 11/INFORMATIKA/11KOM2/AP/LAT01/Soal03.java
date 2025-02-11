import java.util.*;

public class Soal03{
    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        int score = console.nextInt();

        if (score >= 90)
        {
            System.out.println("A");
        } else if (score >= 80)
        {
            System.out.println("B");
        } else if (score >= 70)
        {
            System.out.println("C");
        } else {
            System.out.println("D");
        }
    }
}