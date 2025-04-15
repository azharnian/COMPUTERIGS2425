public class Soal27
{
    public static void main(String[] args)
    {
        // Integer number = 100;
        // changeVal(number);
        // System.out.println(number);
        // number = changeValInt(number);
        // System.out.println(number);

        Number a = new Number(10);
        a.increment();
        incrementNumberVal(a);
        System.out.println(a);
    }

    public static void changeVal(Integer a)
    {
        // reassign;
        a = a * 2;
    }

    public static void incrementNumberVal(Number num)
    {
        // Tidak bisa re-assign.
        // num.increment(); //12
        // num.value += 1; // 12

        int a = num.value + 1;
        num = new Number(a);
    }

    public static Integer changeValInt(Integer a)
    {
        return new Integer(a * 2);
    }
}

class Number{
    int value;

    public Number(int v)
    {
        value = v;
    }

    public void increment()
    {
        value = value + 1;
    }

    public String toString()
    {
        return ""+value;
    }
}