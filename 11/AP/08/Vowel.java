import java.util.Scanner;

public class Vowel {

    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        System.out.print("Enter a char : ");
        String aChar = console.next();

        System.out.println(isVowel(aChar));
        // System.out.println(isVowel("z"));
    }

    public static boolean isVowel(String s)
    {
        // return false;
        return s.length() == 1 && "aiueo".indexOf(s) != -1;
    }


}