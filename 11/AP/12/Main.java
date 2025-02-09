public class Main {

    public static void main(String[] args)
    {
        int[] numbers = {2, 4, 6, 8, 9};
        int[] scores = {100, 80, 90, 70};

        System.out.println(atLeastOneOdd(numbers));
        System.out.println(atLeastOneOdd(scores));
        System.out.println(atLeastOneEven(numbers));
    }

    public static boolean atLeastOneOdd(int[] array)
    {
        for(int number : array)
        {
            if (number % 2 != 0)
            {
                return true;
            }
        }
        return false;
    }

    public static boolean atLeastOneEven(int[] array)
    {
        for(int i = 0; i < array.length; i++)
        {
            if (array[i] % 2 == 0)
            {
                return true;
            }
        }
        return false;
    }
}