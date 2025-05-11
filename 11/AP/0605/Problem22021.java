public class Problem22021{
    public static void main(String[] args)
    {

    }
}

class SingleTable
{
    /** Returns the number of seats at this table. The value is always greater than or equal to 4. */
    public int getNumSeats()
    { /* implementation not shown */ }

    /** Returns the height of this table in centimeters. */
    public int getHeight()
    { /* implementation not shown */ }

    /** Returns the quality of the view from this table. */
    public double getViewQuality()
    { /* implementation not shown */ }

    /** Sets the quality of the view from this table to value. */
    public void setViewQuality(double value)
    { /* implementation not shown */ }

    // There may be instance variables, constructors, and methods that are not shown.
}

class CombineTable
{
    private SingleTable t1;
    private SingleTable t2;

    public CombineTable(SingleTable t1, SingleTable t2)
    {
        this.t1 = t1;
        this.t2 = t2;
    }

    public boolean canSeat(int req)
    {
        if (req <= (t1.getNumSeats() + t2.getNumSeats() - 2))
            return true;
        return false;
    }

    public double getDesirability()
    {
        if (t1.getHeight() == t2.getHeight())
        {
            return (t1.getViewQuality() + t2.getViewQuality())/2;
        } 
        return (t1.getViewQuality() + t2.getViewQuality())/2 - 10;
    }
}