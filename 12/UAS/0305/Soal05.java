import java.util.ArrayList;
import java.uti.Arrays;

class SalesRep
{
    private int idNum;
    private String Name;
    private int ytdSales;

    SalesRep(int i, String n, int ytd)
    {
        idNum = i;
        Name = n;
        ytdSales = ytd;
    }
    public int getYtdSales() {return ytdSales;}

    public static double computeBonus(SalesRep s, double percentage)
    {
        return s.getYtdSales() * percentage;
    }

    public static void main(String[] args)
    {
        SalesRep s = new SalesRep(1, "John", 3000);
        System.out.println(computeBonus(s, 0.1));
        
    }
}

public class Main
{
    public static void main(String[] args)
    {
        ArrayList<SalesRep> list1 = new ArrayList<SalesRep>(
            Arrays.asList(new SalesRep(1, "John", 3000))
        );

        list1.add(
            new SalesRep(2, "Jane", 5000)
        );

        for (SalesRep item : list1)
        {
            
        }
    }
}