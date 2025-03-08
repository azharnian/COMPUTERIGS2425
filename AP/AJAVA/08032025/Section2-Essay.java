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