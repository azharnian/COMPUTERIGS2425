import java.util.*;

public class Soal24
{
    public static void main(String[] args)
    {
        ArrayList<String> petList = new ArrayList<String>(Arrays.asList("Dog"));

        petList.add("Waffle");
        petList.add(1, "Moose");
        petList.add("Noodles");
        petList.add(2, "Novack");
        petList.add(2, "Benji");
        petList.remove(0);

        for (String item : petList)
        {
            System.out.print(item + " ");
        }
    }
}