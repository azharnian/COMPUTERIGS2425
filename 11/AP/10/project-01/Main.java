public class Main {
    public static void main(String[] args)
    {
        // Point p1 = new Point();
        // Point p2 = new Point(10, 20);
        
        // p2.translate(10, 10);
        // p2.printPosition();

        Circle c1 = new Circle(10);
        Circle c2 = new Circle(20, 30, 100);

        System.out.println(c1.getArea());
        System.out.println(c2.getArea());
        System.out.println(c1.isInCircle(3, 3));
    }
}