public class MyRectangle
{
    private int width;
    private int height;
    private int perimeter;

    MyRectangle(int w, int h)
    {
        width = w;
        height = h;
        perimeter = 2 * (w + h);
    }

    public double getPerimeter()
    {
        return perimeter;
    }

    public static void main(String[] args)
    {
        MyRectangle rect = new MyRectangle(2, 3);
        System.out.print(rect.getPerimeter());
    }
}