import java.util.Scanner;
import java.util.ArrayList;

public class Hilo {

    public static void main(String[] args) 
    { // -> tokens, numbers
        checkArgs(args);

        String playAgain;
        Scanner console = new Scanner(System.in);
        
        do {
            int randomNumber = generateRandomNumber();
            playGame(randomNumber, console);

            System.out.print("Do you want to play again (y/n)");
            playAgain = console.next();
        } while (playAgain.equalsIgnoreCase("y"));
        
    }

    public static void checkArgs(String[] tokens)
    {
        if (tokens.length > 0)
        {
            for (int i = 0; i < tokens.length; i++)
            {
                System.out.println(tokens[i]);
            }
        }
    }

    public static int generateRandomNumber()
    {
        return (int) (Math.random() * 100) + 1;
    }

    public static void playGame(int randomNumber, Scanner console)
    {   
        System.out.println(randomNumber);
        ArrayList<Integer> guesses = new ArrayList<>();
        int guess = 0;
        System.out.println("Guess the number between 1 and 100 : ");

        while (guess != randomNumber)
        {
            System.out.print("Input your guess : ");
            guess = console.nextInt();
            guesses.add(guess);

            if (guess < randomNumber)
            {
                System.out.println(guess + " is too low, try again!");
            } else if (guess > randomNumber)
            {
                System.out.println(guess + " is too high, try again!");
            } else 
            {
                System.out.println("Correct! you guessed the number!");
                System.out.println("You tried to guess "+ guesses.size() + " times and they are " + guesses);
            }
        }
    }
}