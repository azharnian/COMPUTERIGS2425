import java.util.*;

public class Mystery {
    public static void main(String[] args){
        Scanner console = new Scanner(System.in);
        System.out.print("Enter a 3-digit number: ");
        int num = console.nextInt();	
        int mystery1 = num % 10;
        int mystery2 = num / 10 % 10;
        int mystery3 = num / 100;

        System.out.println(mystery1 + " " + mystery2 + " " + mystery3);

        console.close();
    }
    
}