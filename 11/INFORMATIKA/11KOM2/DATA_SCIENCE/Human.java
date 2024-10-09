public class Human {

    private String name;
    public int age;

    public Human(String name, int age){
        this.name = name;
        this.age = age;
    }

    public void getName(){
        System.out.println("My name is "+ this.name);
    }

}