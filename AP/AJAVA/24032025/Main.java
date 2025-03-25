import java.util.*;

public class Main
{
    public static void main(String[] args)
    {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        nums.add(1);
        nums.add(2);
        nums.add(3);
        nums.add(4);
        printArr(nums);
        System.out.println(nums);
    }

    public static void printArr(ArrayList<Integer> arr)
    {
        arr.add(10);
        System.out.println(arr);
    }
}