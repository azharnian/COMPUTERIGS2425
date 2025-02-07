public class Circle {
    private int x;
    private int y;

    public Circle(int x, int y)
    {
        this.x = x;
        this.y = y;
    }

    public void getPosition(){
        System.out.println(this.x+","+this.y);
    }
}
