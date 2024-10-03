public class MyClass{
	public static void main(String[] args){
		printX(5); 
		add(1, 2); 
		add(3, 5); 		
		printX(5);
        System.out.println(“3 + 5 = “ + add(3, 5));
		double y = 3 + add(4, 6.0);
	}
	public static void printX(int x){
		System.out.println(“The input x is” + x);
	}
	public static int add(int x, int y){
		return x + y;
	}

    public static double add(double x, double y)
    {
        return x + y;
    }
}
