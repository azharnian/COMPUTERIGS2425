public class Soal32
{
    public static void main(String[] args)
    {
        SomeClass x = new SomeClass();
        x.setName("Andi");

        SomeClass y = new SomeClass();
        y.setName("Budi");

        swap(x, y);
        System.out.println(x + " " + y);
    }

    public static void swap (SomeClass x, SomeClass y)
    {
        String temp;
        // temp = x.getName();
        // x.setName(y.getName());
        // y.setName(temp);
        temp = x.myName;
        x.myName = y.myName;
        y.myName = temp;
    }
}

class SomeClass
{
    public String myName;
    
    public String getName( )
    { return myName; }
    
    public void setName(String name)
    { myName = name; }

    public String toString()
    { return myName; }
}