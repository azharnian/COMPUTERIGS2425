import java.util.Scanner;

public class Problem1005
{
    public static double solution(double A, double B)
    {
        return (A*3.5 + B*7.5) / 11;
    }

    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        double A, B;
        A = console.nextDouble();
        B = console.nextDouble();

        String result = String.format("%.5f", solution(A, B));
        System.out.println("MEDIA = "+result);

        console.close();
    }
    
}