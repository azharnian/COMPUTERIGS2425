import java.util.Scanner;

public class Main
{
    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        String name = console.nextLine();
        double random = Math.random();
        System.out.println(name + "\n" + random);
    }
}