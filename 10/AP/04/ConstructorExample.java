public class ConstructorExample{

    public static void main(String[] args) {
        
        Sprite sprite1 = new Sprite("Andi", 10, 20);
        Sprite sprite2 = new Sprite("Sonya", 30, 50);
        Sprite sprite3 = new Sprite();

        Sprite sprite4 = null;
        Sprite sprite5;

        System.out.println(sprite1.center_x + "," + sprite1.center_y);
        System.out.println(sprite2.center_x + "," + sprite2.center_y);
        System.out.println(sprite3.center_x + "," + sprite3.center_y);

        // System.out.println(sprite1.name);
        // System.out.println(sprite2.name);
        sprite1.getName();
        sprite2.getName();
        sprite3.getName();

        // System.out.println(sprite4.center_x);
        // System.out.println(sprite5.center_x);

        Sprite sprite6 = sprite2;
        sprite6.center_x = 50;
        System.out.println(sprite2.center_x);


        Sprite.sayNotRobot();
        sprite1.sayNotRobot();

        sprite1.iAmNotRObot();
        // Sprite.iAmNotRObot();
    }

}