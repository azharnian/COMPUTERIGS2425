/*
Gilbert Eka P. 10.1
*/

public class Circle {
    private int x;
    private int y;
    private double radius;

    // Constructor 1
    public Circle(double r)
    {
        x = 0;
        y = 0;
        radius = r;
    }

    // Constructor 2
    public Circle(int x, int y, double r)
    {
        this.x = x;
        this.y = y;
        this.radius = r;
    }

    public double getArea()
    {
        return Math.PI * Math.pow(radius, 2);
    }

    public boolean isInCircle(int a, int b)
    {
        return Math.pow(a - x, 2) + Math.pow(b - y, 2)< Math.pow(radius, 2);
    }

    public void translate(int dx, int dy)
    {
        x += dx;
        y += dy;
    }

    public void tripleTheRadius()
    {
        radius *= 3;
    }
}