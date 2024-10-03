public class Main {
    
    public static void main(String[] args) { // driver method or driver class
        Sprite player1 = new Sprite("Andi", 50, 30);
        Sprite player2 = new Sprite("Sonya", 100, 300);

        System.out.println(player1.center_x + ", "+ player1.center_y);
        System.out.println(player2.center_x+ ", " + player2.center_y);

        player1.getName();
        player2.getName();

        player1.center_x = 200;
        player1.center_y = 300;

        System.out.println(player1.center_x + ", " + player1.center_y);

        player2.setName("Cindy");
        player2.getName();

        Sprite player4 = new Sprite();
        player4.getName();
    }
}
