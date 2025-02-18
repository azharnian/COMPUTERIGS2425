import java.util.*;

public class Soal8 {
    public static void main(String[] args)
    {
        String visitor = "";
        Scanner console = new Scanner(System.in);

        System.out.print("Input your visitor type : ");
        visitor = console.nextLine();
        System.out.println("Price = " + ticketPrice(visitor));
    }

    public static int ticketPrice(String type)
    {
        int price = 100;
        if (type.equalsIgnoreCase("child"))
        {
            price -= 10;
        }
        if (type.equalsIgnoreCase("senior"))
        {
            price -= 20;
        }
        return price;
    }
}