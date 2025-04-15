public class Soal17
{
    public static void main(String[] args)
    {
        // Soft-Casting Object Type
        Fish Bob = new Shark();
        System.out.println(Bob.endoskeleton);
        // System.out.println(((Shark) Bob).endoskeleton);
        Bob.action();
        ((Shark) Bob).eat();
    }
}

class Fish
{
    public String endoskeleton = "bone";
    public void action()
    {
        System.out.println("splash splash");
    }
}
class Shark extends Fish
{
    public void action()
    {
        System.out.println("chomp chomp");
    }

    public void eat()
    {
        System.out.println("i'm eating!");
    }
    public String endoskeleton = "cartilage";
}