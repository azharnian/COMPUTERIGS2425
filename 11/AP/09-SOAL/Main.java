public class Main {
    /*
    public static String animal1 = "elephant";
    public static String animal2 = "lion";

    public static void main(String[] args)
    {
        swap();
        animal1 = animal1.toUpperCase();
        animal2 = animal2.toLowerCase();
        System.out.println(animal1 + " " + animal2);
    }

    public static void swap() {
        String hold = animal1;
        animal1 = animal2;
        animal2 = hold;
    }
    */
    public static void main(String[] args)
    {
        String animal1 = "elephant";
        String animal2 = "lion";
        swap(animal1, animal2);
        animal1.toUpperCase();
        animal2.toLowerCase();
        System.out.println(animal1 + " " + animal2);
    }

    public static void swap(String a1, String a2) {
        String hold = a1;
        a1 = a2;
        a2 = hold;
    }

}