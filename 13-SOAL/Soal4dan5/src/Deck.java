public class Deck{
    private Card[] deck = {
                    new Card("heart", 4),
                    new Card("diamond", 10)
    };
    public final static int NUMCARDS = 52;

    public  void writeDeck()
    {
        for (Card card : deck)
        {
            System.out.println(card);
        }
    }
}