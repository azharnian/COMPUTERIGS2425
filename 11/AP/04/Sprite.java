public class Sprite {

    private String name;
    double center_x, center_y;

    public Sprite()
    {
        name = "John";
        center_x = 0;
        center_y = 0;
    }

    public Sprite(String n, double x, double y)
    {
        name = n;
        center_x = x;
        center_y = y;
    }

    public void getName()
    {
        System.out.println("My name is" + name);
    }

    public void setName(String new_name)
    {
        name = new_name;
    }

    public void display()
    {

    }

    public void update()
    {

    }
}
