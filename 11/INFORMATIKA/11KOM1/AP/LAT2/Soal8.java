import java.util.*;

public class Soal8
{
    public static void main(String[] args)
    {
        Scanner console = new Scanner(System.in);
        String visitor = console.nextLine();
        System.out.println(ticketPrice(visitor));

    }

    public static int ticketPrice(String type)
    {
        // option b
        int price = 100;
        if (type.equalsIgnoreCase("child"))
            return price -= 10;
        if (type.equalsIgnoreCase("senior"))
            return price -= 20;
        return price;
    }
}