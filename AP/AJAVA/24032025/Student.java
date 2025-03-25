public class Student
{
    public int id;
    public String name;

    public static int studentCounter = 0;

    Student(String n)
    {
        studentCounter += 1;
        id = studentCounter;
        name = n;
    }

    public String multipleName (String name, int nTimes)
    {
        String res = "";
        for (int i=0; i<nTimes; i++)
        {
            res += name;
        }
        return res;
    }

    //  public String multipleName (int nTimes, String name)
    // {
    //     String res = "";
    //     for (int i=0; i<nTimes; i++)
    //     {
    //         res += name;
    //     }
    //     return res;
    // }

    public static void main(String[] args)
    {
        Student s1 = new Student("Andi");
        Student s2 = new Student("Bob");

        System.out.println(s1.id + " " + s1.name + " " + s1.studentCounter);
        System.out.println(s2.id + " " + s2.name + " " + s2.studentCounter);
        // System.out.println(Student.studentCounter);
        System.out.println(s1.multipleName("Cindy", 10));
        System.out.println(s1.multipleName(nTimes=10, name="Cindy"));
    }
}