import java.util.*;

public class Main
{

    public static void main(String[] args)
    {
        // Date oldDate = new Date(1, 13, 1900);
        // Date recentDate = null;
        // addCentury(recentDate, oldDate);

        // System.out.println(oldDate);
        // System.out.println(recentDate);

        // ArrayList<Integer> list_1 = new ArrayList<Integer>(Arrays.asList(1, 2, 3));
        // ArrayList<Integer> list_2 = new ArrayList<Integer>(Arrays.asList(4, 5, 6));

        // appendList(list_1, list_2);
        // System.out.println(list_1);
        // System.out.println(list_2);

        // Date d1 = new Date(1, 2, 2020);
        // d1.addMonth(10);
        // System.out.println(d1);

        Temperature t1 = new Temperature(100, "C");
        Temperature t2 = t1.lower(20);
        System.out.println(t1);
        System.out.println(t2);

    }

    public static void addCentury(Date recent, Date old)
    {
        // old.addYear(100);
        old = new Date(2,2,2020);
        // recent = new Date(2,2,2020);
        recent = old;
    }

    public static void appendList(ArrayList<Integer> list_1, ArrayList<Integer> list_2)
    {
        list_1.add(4);
        list_2.add(7);
        list_2 = list_1;
    }

}

class Date
{
    int month;
    int day;
    int year;

    Date(int m, int d, int y)
    {
        month = m;
        day = d;
        year = y;
    }

    public void addYear(int y)
    {
        year = y;
    }

    public String toString()
    {
        return month + "/" + day + "/" + year;
    }
}

class Temperature
{
    private String scale;
    private double deg;

    Temperature(double d, String s)
    {
        scale = s;
        deg = d;
    }

    public Temperature lower(double amount)
    {
        deg -= amount;
        return this;
    }

    public String toString()
    {
        return deg + " " + scale;
    }
}

