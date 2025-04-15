public class BirdStuff
{
    public static void printName(Bird b)
    { 
        System.out.println(b);
    }
    public static void printBirdCall(Parrot p)
    { 
        System.out.println(p.call());
    }
    
    //several more Bird methods
    public static void main(String[] args)
    {
        Bird bird1 = new Bird();
        Bird bird2 = new Parrot();
        Parrot parrot1 = new Parrot();
        Parrot parrot2 = new Parakeet();

        // ((Parrot) bird1).repeat("Pagi pak jony...");
        ((Parrot) bird2).repeat("Pagi bu susi");
        parrot1.repeat("Pagi pak jony");
        /* more code */

        // A
        // printName(parrot2);
        // printBirdCall((Parrot) bird2);

        // B
        // (Error)
        // printName((Parrot) bird1);
        // printBirdCall(bird2);
        // (Correct)
        // printName(bird1);
        // printBirdCall((Parrot) bird2);

        // C
        // (Error)
        // printName(bird2);
        // printBirdCall(bird2);
        // (Correct)
        // printName(bird2);
        // printBirdCall((Parrot) bird2);

        // D
        // (Error)
        // printName(parrot1);
        // printBirdCall(parrot2);

        // E
        // (Error)
        // printName((Bird) parrot2);
        // printBirdCall(parrot2);
    }
}

class Bird {
    String name = "bird";

    public String toString()
    {
        return this.name;
    }

    public String call()
    {
        return "Cuit cuit";
    }
    
}

class Parrot extends Bird {

    public void repeat(String text)
    {
        System.out.println(text);
    }
}

class Owl extends Bird {

}

class Parakeet extends Parrot {

}

