class Bee
{
    private int lifeSpan;
    private String name;

    Bee(String n, int life)
    {
        lifeSpan = life;
        name = n;
    }
    public String getName()
    {
        return name;
    }
    public String toString()
    {
        return " The " + name + "s live"  + lifeSpan + " months.";
    }
}
class Queen extends Bee
{
    private int eggsPerDay;

    Queen(String name, int months, int eggs)
    {
        super(name, months);
        eggsPerDay = eggs;
    }
    public String toString()
    {
        return " The queen" + " lays " + eggsPerDay + " eggs.";
    }

    public void say()
    {
        System.out.println("Hi!");
    }
}

public class Soal23
{
    public static void main(String[] args)
    {
        Queen bee1 = new Queen("honey bee", 6, 2000);
        System.out.println(bee1.toString());
        bee1.say();

        Bee bee2 = new Queen("honey bee2", 6, 2000);
        bee2.say();
    }
}