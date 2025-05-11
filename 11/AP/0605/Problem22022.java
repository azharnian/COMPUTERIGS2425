public class Problem22022{
    public static void main(String[] args)
    {

    }
}

class Book
{
    /** The title of the book */
    private String title;

    /** The price of the book */
    private double price;

    /** Creates a new Book with given title and price */
    public Book(String bookTitle, double bookPrice)
    { /* implementation not shown */ }

    /** Returns the title of the book */
    public String getTitle()
    { return title; }

    /** Returns a string containing the title and price of the Book */
    public String getBookInfo()
    {
        return title + "-" + price;
    }

    // There may be instance variables, constructors, and methods that are not shown.
}

// You will write a class Textbook which is a subclass of Book.

class Textbook extends Book{
    private int editionNumber;

    public Textbook(String bookTitle, double bookPrice, int edition)
    {
        super(bookTitle, bookPrice);
        editionNumber = edition;
    }

    public String getBookInfo()
    {
        return super.getBookInfo() + "-" editionNumber;
    }

    public int getEdition()
    {
        return editionNumber;
    }

    public boolean canSubtituteFor(Textbook b)
    {
        if (b.getTitle().equals(bookTitle) && b.getEdition() <= editionNumber)
        {
            return true;
        }
        return false;
    }
}