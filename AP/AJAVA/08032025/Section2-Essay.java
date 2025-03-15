// 1 A

public boolean isLetterVowel(String letter)
{
	if ( letter.equals(“a”) || letter.equals(“e”) || letter.equals(“i”) || letter.equals(“o”) || letter.equals(“u”) )
	{
		return true;
	}
	return false;
}


// 1 B

public String convertWord(String word)
{
    String firstLetter = word.substring(0, 1);
    if (isLetterVowel(firstLetter))
    {
        return word + "way";
    }
    String secondLetter = word.substring(1, 2);
    if (isLetterVowel(secondLetter))
    {
        return word.substring(1) + firstLetter + "ay";
    }

    return word.substring(2) + firstLetter + secondLetter + "ay";
}

// 1 C
public String converPhrase(String phrase)
{
    if (phrase.length() == 0 || phrase == null)
        return "";

    String[] words = phrase.split(" ");
    for (int i = 0; i < words.length; i++)
    {
        String word = words[i];
        words[i] = convertWord(word);
    }

    return String.join(" ", words);
}

// 2

public class PrmierMember extends FrequentFlyMember
{
    private boolean premierClubMembership;
    private int freeBags;
    private String otherFrequentFlyerMember;

    PremierMember (int n, String name, String other, int miles)
    {
        super(n, name, miles);
        premierClubMembership = true;
        freeBags = 2;
        otherFrequentFlyerMember = other;
    }

    /*
    public String getStatusInfo()
    {
        return acctNumber + " " + flyerName + " level " + statusLevel + " also a member of " + otherFrequentFlyerMember;
    }
    */

    public String getStatusInfo()
    {
        return super.getStatusInfo() + " also a member of " + otherFrequentFlyerMember;
    }
}

// 3 A

public ArrayList<FactorPair> buildArrayList(int n)
{
    ArrayList<FactorPair>() factors;
    for (int i = 1; i <= (int) Math.sqrt(n); i++)
    {
        if (n % i == 0)
        {
            FactorPair factorPair = new FactorPair(i, n/i);
            factors.add(factorPair);
        }
    }
    return factors;
}

// 3 B

public int findMostPairs(Factors f)
{
    if (this.pairs.size() > f.pairs.size())
    {
        return this.number;
    } else if (this.pairs.size() < f.pairs.size())
    {
        return f.number;
    }
    return -1;
}

// 3 C

public String toString()
{
    String res = "";
    for (FactorPair item : this.pairs)
    {
        res += "(" + item.getFactor1() + " " + item.getFactor2() + ") ";
    }
    return res;
}


// 4 A

public static int[][] buildMatrix(int[] arr, int cols)
{
    int[][] res = new int[arr.length][cols];
    for (int row = 0; row < arr.length; row++)
    {
        int firstCol = arr[row];
        for (int col = 0; col < cols; col++)
        {
            res[row][col] = firstCol * (col + 1);
        }
    }
    return res;
}

// 4 B

public static int[][] eliminateDuplicate(int[][] arr)
{
    ArrayList<Integer> firstCol = new ArrayList<Integer>();
    for (int[] item : arr)
    {
        firstCol.add(item.get(0));
    }

    ArrayList<Integer> noDuplicateArr = new ArrayList<Integer>();
    for (int item : firstCol)
    {
        if (!noDuplicateArr.contains(item))
        {
            noDuplicateArr.add(item);
        }
    }

    int[] tempArr = new int[noDuplicateArr.size()];
    for(int i = 0; i < tempArr.length; i++ )
    {
        tempArr[i] = noDuplicateArr.get(i);
    }

    int[][] res;
    res = buildMatrix(tempArr, arr.length);
    return res;
}