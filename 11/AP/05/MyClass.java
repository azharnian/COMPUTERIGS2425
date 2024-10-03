public class MyClass{
	public static void main(String[] args){
		// printX(); 
		// add(); 
		add(3, 5); 		
		// System.out.println(printX(5));					
        System.out.println("3 + 5 = " + add(3, 5));
		// int y = 3 + add(4, 6.0);
	}
	public static void printX(int x){
		System.out.println("The input x is" + x);
	}
	public static int add(int x, int y){
		return x + y;
	}
}