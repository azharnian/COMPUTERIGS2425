public class Text {

    public static void main(String[] args)
    {
        String text = "\"I love you\" she said.";
        System.out.println(text);
        System.out.println(text.length());
        System.out.println(text.substring(10));
        System.out.println(text.substring(10, 12)); // 10-11

        String friend1 = "anton";
        String friend2 = "budi";
        String friend3 = "anton";

        System.out.println(friend1 == friend2);
        System.out.println(friend1 == friend3);

        System.out.println(friend1.equals(friend2));
        text = text.substring(2, 5);
        System.out.println(text);
    }

}