public class Sprite{

    private String name;
    public double center_x, center_y;

    // Overloaded
    public Sprite()
    {
        name = "John Doe";
        center_x = 100;
        center_y = 100;
    }

    public Sprite(String n, double x, double y)
    {   
        name = n;
        center_x = x;
        center_y = y;
    }

    // getter
    public void getName()
    {
        System.out.println("Hello, i'm "+ name);
    }

    public void display()
    {

    }

    public void update()
    {

    }

    public void iAmNotRObot()
    {
        System.out.println(name + ", I'm not robot");
    }

    public static void sayNotRobot()
    {
        System.out.println("We are not robot");
    }
}