import java.util.*;

public class SoalContoh50{
    public static void main(String[] args)
    {
        ArrayList<Integer> nums = new ArrayList<Integer>(Arrays.asList(1, 2, 3));
        
        if(nums.contains(3)) System.out.println("Found"); else System.out.println("Not Found");

        if(nums.contains(10)) System.out.println("Found"); else System.out.println("Not Found");

    }
}