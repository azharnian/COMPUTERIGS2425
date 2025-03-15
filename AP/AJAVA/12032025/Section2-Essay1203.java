// 1 A

public String extractCity(String cityZip)
{
    return cityZip.substring(0, cityZip.indexOf(","));
}

// 1 B

public void printNames()
{
    for(int i = 0; i < this.lines.size(); i++)
    {
        if (i == 0)
            System.out.println(this.lines.get(0));
        if (this.lines.get(i).equals(""))
            System.out.println(this.lines.get(i+1));
    }
}

// 1 C
public String getAddress(String name)
{
    int index = this.lines.indexOf(name);

    String res = "";
    while(!this.lines.get(index+1).equals(""))
    {
        res += this.lines.get(index+1) + "\n";
        index++;
    }
    return res;
}

// 2 A
public static int countA(Wordset s)
{
    int counter = 0;
    for (int i=1; i <= s.size(); i++)
    {
        if (s.findkth(i).substring(0, 1).equals("A"))
            counter++;
    }
    return counter;
}

// 2 B
public static void removeA(Wordset s)
{
    int numA = countA(s);
    if (numA > 0)
    {
        for (int i=1; i<= numA; i++)
        {
            s.removeA(s.findkth(1));
        }
    }
}

// 3 A

public void updateLocation(int newRow, int newCol)
{
    this.loc = new Location(newRow, newCol);
}

// 3 B

public void sortAllRows()
{
    for (int i=0; i < NUM_ROWS; i++)
    {
        sort(contestans[i]);
    }
}

// 3 C

public String findWinnerName()
{
    sortAllRows();
    int maxScore = contestants[0][0].getScore();
    String name =  contestants[0][0].getName();

    for (int k = 0; k < NUM_ROWS; k++)
    {
        Contestant contestant =  contestants[k][CONTESTANTS_PER_ROW - 1];
        if ( contestant > maxScore)
        {
            maxScore = contestant.getScore();
            name = contestant.getName();
        }
    }
    return name;
}