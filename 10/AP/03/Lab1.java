import java.util.Scanner;

public class Lab1 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        double a1, a2, a3;
        System.out.print("Enter grade: ");
        a1 = console.nextDouble();
        System.out.print("Enter grade: ");
        a2 = console.nextDouble();
        System.out.print("Enter grade: ");
        a3 = console.nextDouble();

        double ave = (a1 + a2 + a3) / 3;
        double variance = ( Math.pow((a1 - ave), 2) + Math.pow((a2 - ave), 2) + Math.pow((a3 - ave), 2) ) / 3;
        
        double stdv = Math.sqrt(variance);

        System.out.println("Average ="+ave);
        System.out.println("Variance ="+variance);
        System.out.println("Standard deviation ="+stdv);

        console.close();
    }
}
