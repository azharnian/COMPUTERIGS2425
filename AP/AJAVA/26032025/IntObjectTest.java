public class IntObjectTest
{
    public static void main(String[] args)
    {
        IntObject x = new IntObject(2);
        IntObject y = new IntObject(7);
        IntObject a = y;
        x = someMethod(a);
        a = someMethod(x);

        System.out.println(x + " " + y + " " + a);
    }

    public static IntObject someMethod(IntObject obj)
    {
        obj.increment();
        return obj;
    }

}

class IntObject
{
    private int num;
    public IntObject() //default constructor
    { num = 0; }
    public IntObject(int n) //constructor
    { num = n; }
    public void increment() //increment by 1
    { num++; }

    public String toString()
    {
        return ""+num;
    }
}

