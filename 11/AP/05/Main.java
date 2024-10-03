public class Main {
    public static void main(String[] args) {
        meow();
        meow();

        sayHi("Rudi");
        sayHi("Bill");

        System.out.println(findAreaOfCircle(100));
        System.out.println(Math.sqrt(4));
        System.out.println(Math.abs(-4));
        System.out.println(Math.PI);

        System.out.println(add(10, 15));
        System.out.println(add(20.5, 70.5));
        System.out.println(add("2", "3"));
    }

    public static void meow()
    {
        System.out.println("Meow... meow... ");
        System.out.println("Meow... meow... arghhhdh...");
    }

    public static void sayHi(String name)
    {
        System.out.println("Meow... hi "+name+" howdy...");
    }

    public static double findAreaOfCircle(double radius)
    {
        return Math.PI * Math.pow(radius, 2);
    }

    public static int add(int a, int b)
    {
        return a + b;
    }

    public static double add(double a, double b)
    {
        return a + b;
    }

    public static double add(String a, String b)
    {
        return Double.parseDouble(a) + Double.parseDouble(b);
    }
}