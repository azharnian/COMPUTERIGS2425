import java.util.Scanner;

public class Lab1 {
    public static void main(String[] args)
    {
        // printName();
        System.out.println(pigLatin());
    }

    public static void printName()
    {
        String first, middle, last;

        Scanner console = new Scanner(System.in);
        first = console.next();
        middle = console.next();
        last = console.next();

        System.out.println("First: "+first);
        System.out.println("Middle: "+middle);
        System.out.println("Last: "+last);

        console.close();
    }

    public static String pigLatin()
    {
        Scanner console = new Scanner(System.in);
        String s = console.next(); // pig
        console.close();
        return s.substring(1)+s.substring(0, 1)+"ay";
    }
}