public class Soal12
{
    public static void main(String[] args)
    {

    }
}

class Table
{
    public double getPrice()
    {
        return 0.0;
    }
}

class Chair
{
    public double getPrice()
    {
        return 0.0;
    }
}

class DiningRoomSet
{
    private Table table;
    private ArrayList<Chair> chairs;

    public DiningRoomSet(Table t, ArrayList<Chair> cList)
    {
        table = t;
        chairs = cList;
    }
}