import java.util.Scanner;

public class Problem1003
{
    public static int solution(int A, int B)
    {
        return A+B;
    }

    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        int A, B;
        A = console.nextInt();
        B = console.nextInt();

        System.out.println("SOMA = "+solution(A, B));
    }
    
}