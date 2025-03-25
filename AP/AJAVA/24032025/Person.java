import java.util.*;

public class Person
{
    String name;
    int age;

    Person(String name,int age)
    {
        this.name = name;
        this.age = age;
    }

    public String toString()
    {
        return "I'm " + this.age + " years old";
    }

    public static void main(String[] args)
    {
        // int a = 10;
        // int b = a;
        // b += 5;

        // System.out.println(a + " " + b);

        // Person a = new Person("andi", 20);
        // Person b = a;

        // b.age += 10;
        // a.age += 20;
        // System.out.println(a);
        // System.out.println(b);

        // String name1 = "Anas";
        // String name2 = name1;

        // name2 += " Azhar";
        // System.out.println(name1);
        // System.out.println(name2);

        // Integer num1 = 10;
        // Integer num2 = num1;

        // num2 += 20;
        // System.out.println(num1);
        // System.out.println(num2);
        ArrayList<Integer> arr1 = new ArrayList<Integer>();
        arr1.add(10);
        arr1.add(20);

        ArrayList<Integer> arr2 = arr1;
        arr2.add(30);

        System.out.println(arr1);
        System.out.println(arr2);
    }
}