public class Person
{
    private String name;
    private int age;

    // public Person(String aName, int anAge)
    // {
    //     name = aName;
    //     age = anAge;
    // }

    Person(String name, int age)
    {
        this.name = name;
        this.age = age;

        this.sayHi();
    }

    /** @return the String form of this person */
    public String toString()
    { return name + " " + age; }

    public void sayHi()
    {
        System.out.println("Hi... I'm " + this.name);
    }

    public void printPerson()
    { System.out.println(this); }
    //Other variables and methods are not shown.

    public static void main(String[] args)
    {
        Person p = new Person("Kevin", 10);
        // System.out.println(p);
        // System.out.println(p.toString());
        // p.printPerson();
    }
}