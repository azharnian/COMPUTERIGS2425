public class Parabola
{
    int a, b, c;

    Parabola(int valueA, int valueB, int valueC)
    {
        a = valueA;
        b = valueB;
        c = valueC;
    }

    public double getAxis()
    {
        return (double) -b / (2*a);
    }

    public boolean isOnGraph(int x, int y)
    {
        return y == ( a*x*x + b*x + c );
    }

    public static void main(String[] args)
    {
        Parabola f = new Parabola(2, -6, -5);
        System.out.println(f.getAxis()+ " " + f.isOnGraph(4, 3));

        Parabola g = new Parabola(4, 2, -3);
        System.out.println(g.getAxis()+ " " + g.isOnGraph(4, 3));
    }

}