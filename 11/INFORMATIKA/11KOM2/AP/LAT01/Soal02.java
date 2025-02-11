import java.util.*;

public class Soal02{

    public static void main(String[] args)
    {
        ArrayList<String> petList = new ArrayList<String>(Arrays.asList("Dog"));
        petList.add("Cat");
        petList.add("Fish");
        petList.add(1, "Golden Bandicoot");
        petList.remove(0);

        System.out.println(String.join(", ", petList));
    }
}