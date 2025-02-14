import java.util.*;

public class Q8{
    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        String input = console.nextLine();

        int price = ticketPrice(input);
        System.out.println(price);
    }

    public static int ticketPrice(String visitor)
    {
        if(visitor.equals("child")){
            return 90;
        }
        if(visitor.equals("adult")){
            return 100;
        }
        if(visitor.equals("senior")){
            return 80;
        }
        return 0;
    }
}