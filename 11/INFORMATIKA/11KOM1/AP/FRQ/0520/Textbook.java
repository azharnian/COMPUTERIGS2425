public class Textbook extends Book{

    private int bookEdition;

    public Textbook(String title, double price, int edition)
    {
        super(title, price);
        bookEdition = edition;
    }

    public int getEdition()
    {
        return bookEdition;
    }   

    @Override
    public String getBookInfo()
    {
        return super.getBookInfo()+"-"+getEdition();
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