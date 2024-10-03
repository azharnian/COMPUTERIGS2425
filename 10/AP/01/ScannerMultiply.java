import java.util.*;

public class ScannerMultiply {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        System.out.print("Please type three numbers: ");
        int num1 = console.nextInt();
        int num2 = console.nextInt();
        int num3 = console.nextInt();

        int product = num1 * num2 * num3;
        System.out.println("The product is " + product);

        console.close();
    }
}
