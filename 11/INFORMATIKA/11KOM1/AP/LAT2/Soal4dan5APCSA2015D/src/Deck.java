public class Deck
{
    private Card[] deck = {new Card("heart", 3), new Card("diamond", 4)};
    public final static int NUMCARDS = 52;

    public void writeDeck()
    {
        // System.out.println(deck);

        for (Card card : deck)
            System.out.println(card);
    }

}
