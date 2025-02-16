import java.util.*;
public class Main{

    public static void main(String[] args)
    {   
        int userInput;
        ArrayList<String> movies = new ArrayList<String>(Arrays.asList("A", "B", "C"));
        ArrayList<Integer> ratings = new ArrayList<Integer>(Arrays.asList(4, 4, 3));
        ArrayList<String> reviews = new ArrayList<String>(Arrays.asList("a", "b", "c"));

        Scanner console = new Scanner(System.in);
        while(true)
        {
            clearScreen();
            showMenu();
            System.out.print("Insert your choice : ");
            userInput = console.nextInt();
            console.nextLine();

            if(userInput == 1)
            {
                createReview(console, movies, ratings, reviews);
            } else if(userInput == 2)
            {
                showAllMovies(console, movies, ratings);
            }
        }
        // console.close();
    }

    public static void clearScreen() {  
        System.out.print("\033[H\033[2J");  
        System.out.flush();  
    } 

    public static void showMenu()
    {
        System.out.println(
            """
            My Movie Reviews
            1. Create review
            2. Show all movies
            3. About app
            """
        );
    }

    public static void createReview(Scanner console, ArrayList<String> movies, ArrayList<Integer> ratings, ArrayList<String> reviews)
    {
        String title = "";
        System.out.print("Insert title : ");
        title = console.nextLine();

        Integer rating = 0;
        System.out.print("Insert rate : ");
        rating = console.nextInt();
        console.nextLine();

        String review = "";
        System.out.print("Your review : ");
        review = console.nextLine();

        movies.add(title);
        ratings.add(rating);
        reviews.add(review);

        System.out.println("Your review submited!\nPress enter to go back to main menu.");
        console.nextLine();
    }

    public static void showAllMovies(Scanner console, ArrayList<String> movies, ArrayList<Integer> ratings)
    {
        System.out.println("\nMovie List\n");
        System.out.println("No\t"+"Title\t"+"Rating");
        for(int i = 0; i < movies.size(); i++)
        {
            System.out.println(i+1 + "\t" + movies.get(i) + "\t" + ratings.get(i));
        }
        System.out.println("Menu : <E>Edit <D>Delete <X>Extra Detail <S>Skip");
        String userInput = "";
        userInput = console.nextLine();
        if(userInput.equalsIgnoreCase("S"))
        {
            System.out.println("Press enter to go back to main menu.");
            console.nextLine();
        } else if (userInput.equalsIgnoreCase("X"))
        {

        } else if (userInput.equalsIgnoreCase("E"))
        {

        } else if (userInput.equalsIgnoreCase("D"))
        {

        } else {

        }

    }
}