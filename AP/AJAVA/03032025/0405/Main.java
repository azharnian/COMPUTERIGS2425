import java.util.ArrayList;
import java.util.Arrays;

public class Main
{
    public static void main(String[] args)
    {
        // SalesRep s = new SalesRep(2, "Bob", 1000);
        // System.out.println(computeBonus(s, 0.3));

        ArrayList<SalesRep> list1 = new ArrayList<SalesRep>(Arrays.asList(
            new SalesRep(1, "Susan", 1000),
            new SalesRep(2, "Bob", 2000)
        ));

        double sum = 0;
        for (int i = 0; i <= list1.size()-1; i++)
        {
            sum += list1.get(i).getYtdSales();
        }
        System.out.println(sum);
    }

    public static double computeBonus(SalesRep s, double percentage)
    {
        return s.getYtdSales() * percentage;
    }
}