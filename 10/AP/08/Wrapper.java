public class Wrapper {
    public static void main(String[] args)
    {
        int number = 5;
        Integer myNumber = new Integer(10);

        int myNumberValue = myNumber.intValue(); // unbox

        System.out.println(number + myNumber);
        System.out.println(number + myNumberValue);
    }
}