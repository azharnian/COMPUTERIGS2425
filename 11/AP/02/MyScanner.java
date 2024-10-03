import java.util.Scanner;

public class MyScanner{
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        System.out.print("How old are you? ");
        double age = console.nextDouble();
        System.out.println("You typed "+ age);

        // console.close();
    }
}