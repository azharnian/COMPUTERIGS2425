import java.util.Scanner;

public class Lab1 {

    public static void main(String[] args)
    {
        // printName();
        System.out.println(pigLatin("pig"));
    }

    public static void printName()
    {
        Scanner console = new Scanner(System.in);
        String first = console.next();
        String middle = console.next();
        String last = console.next();

        // System.out.println(first+" "+middle+" "+last);
        System.out.println("First: "+ first);
        System.out.println("Middle: "+ middle);
        System.out.println("Last: "+ last);
        console.close();
    }

    public static String pigLatin(String s)
    {
        return s.substring(1)+s.substring(0, 1)+"ay";
    }

}