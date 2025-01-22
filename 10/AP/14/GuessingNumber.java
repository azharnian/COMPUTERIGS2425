
public class GuessingNumber {
    public static void main(String[] args)
    {
        int[] bounds = {0, 0};
        int randomNumber;
        if (args.length == 2)
        {
            for(int i=0; i<2; i++)
            {
                bounds[i] = Integer.valueOf(args[i]);
            }
            randomNumber = getRandomNumber(bounds[0], bounds[1]);
            System.out.println("Our random number is "+ randomNumber);
        } else {
            System.out.println("We need lower and upper bound! Input 2 numbers.");
        }
    }

    public static int getRandomNumber(int low, int high)
    {
        return (int) (Math.random() * (high-low+1)) + low ;
    }
}