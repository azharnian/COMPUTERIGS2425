import java.util.Scanner;
public class Lab1{
    public static void main(String[] args){
        Scanner console = new Scanner(System.in);
        System.out.print("Enter x1: ");
        int x1 = console.nextInt();

        System.out.print("Enter y1: ");
        int y1 = console.nextInt();

        System.out.print("Enter x2: ");
        int x2 = console.nextInt();

        System.out.print("Enter y2: ");
        int y2 = console.nextInt();

        console.close();

        System.out.println("The average of 2 and -1 is "+ average(x1, y1) +".");
        System.out.println("The slope of the line between (2,-1) and (3,5) is "+ slope(x1, y1, x2, y2));
        System.out.println("The distance between (2,-1) and (3,5) is "+ distance(x1, y1, x2, y2));
    }
    public static double average(int x, int y){
        return (double) (x + y) / 2.0;
    }

    public static double slope(int x1, int y1, int x2, int y2){
        return (double) (y2 - y1) / (x2 - x1);
    }

    public static int difference(int x, int y){
        return (x - y);
    }

    public static int square(int x){
        return x * x;
    }

    public static double distance(int x1, int y1, int x2, int y2){
        return Math.sqrt( square(difference(x1, x2)) + square(difference(y1, y2)) );
    }
}