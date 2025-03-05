public class SalesRep
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

}