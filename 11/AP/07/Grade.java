public class Grade {

    public static void main(String[] args)
    {
        int percent = 90;

        if (percent >= 90) {
            System.out.println("You got an A!");
        }
        else if (percent >= 80) {
            System.out.println("You got a B!");
        }
        else if (percent >= 70) {
            System.out.println("You got a C!");
        }
        else if (percent >= 60) {
            System.out.println("You got a D!");
        }
        else {
            System.out.println("You got an F!");
        }
    }
}