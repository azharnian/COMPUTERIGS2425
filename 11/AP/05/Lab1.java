public class Lab1 {
    public static void main(String[] args){
        int x1 = 2, y1 = -1, x2 =3, y2 = 5;
        System.out.println("The average of 2 and -1 is "+average(2, -1));
        System.out.println("The slope of the line between (2,-1) and (3,5) is "+slope(x1, y1, x2, y2));
        System.out.println("The distance between (2,-1) and (3,5) is "+distance(x1, y1, x2, y2));
    }

    public static double average(int x, int y)
    {
        return (x + y) / 2.0;
    }

    public static double slope(int x1, int y1, int x2, int y2)
    {
        return (double) difference(y2, y1) / difference(x2, x1);
    }

    public static int difference(int x, int y)
    {
        return x - y;
    }

    public static int square(int x)
    {
        return x * x;
    }

    public static double distance(int x1, int y1, int x2, int y2)
    {
        return Math.sqrt( square(difference(x1, x2)) +  square(difference(y1, y2)));
    }
}