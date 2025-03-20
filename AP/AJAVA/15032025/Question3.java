class MarbleSet
{

    public MarbleSet(String color, int numMarbles)
    {

    }
    public String getColor()
    { 

    }
    public int getNumber()
    {

    }
}

class MarbleCollection
{
    private List<MarbleSet> sets;
    public MarbleCollection()
    { sets = new ArrayList<MarbleSet>(); }

    public void addSet(MarbleSet theSet)
    { sets.add(theSet); }

    public int getTotalMarbles()
    {
        int sum = 0;
        for(int i = 0; i < sets.size(); i++)
            sum += sets.get(i).getNumber()
        return sum;
    }

    public int removeColor(String marbleColor)
    { 

    }
}

public class Question3
{
    public static void main(String[] args)
    {

    }
}