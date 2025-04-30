import java.util.Scanner;

public class Problem1002
{
    public static double solution(double R)
    {
        return 3.14159 * R * R;
    }

    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        double R;
        R = console.nextDouble();

        String result = String.format("%.4f", solution(R));
        System.out.println("A="+result);
    }
    
}