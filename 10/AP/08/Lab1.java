import java.util.Scanner;

public class Lab1 {

    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        System.out.print("Enter month: ");
        int m = console.nextInt();

        System.out.print("Enter day: ");
        int d = console.nextInt();

        System.out.print("Enter year: ");
        int y = console.nextInt();

        System.out.println("Day of the week: "+ dayOfWeek(m, d, y));
        console.close();

    }

    public static String dayOfWeek(int m, int d, int y)
    {   
        int y0 = y - (14 - m) / 12;
        int x0 = y0 + y0 / 4 - y0 / 100 + y0 / 400;
        int m0 = m + 12 * ((14 - m) / 12) - 2;
        int D = (d + x0 + 31 * m0 / 12) %  7;


        if (D == 0) return "Sunday";
        if (D == 1) return "Monday";
        if (D == 2) return "Tuesday";
        if (D == 3) return "Wednesday";
        if (D == 4) return "Thursday";
        if (D == 5) return "Friday";
        return "Saturday";
    }

}