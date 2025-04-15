public class Soal26
{
    public static void main(String[] args)
    {
        Point p1 = new Point(1, 2);
        Point p2 = new Point(3, 4);

        // System.out.println(p1.compareTo(p1));
        System.out.println(p2.x);
    }
}

class ComparableObject
{
    public int compareTo(Object o)
    {
        return 0;
    }
}

class Point extends ComparableObject
{
    private int x;
    private int y;

    public Point(int xVal, int yVal)
    {
        x = xVal;
        y = yVal;
    }

    public boolean compareTo(Point other)
    {
        return (x == other.x && y == other.y);
    }
}