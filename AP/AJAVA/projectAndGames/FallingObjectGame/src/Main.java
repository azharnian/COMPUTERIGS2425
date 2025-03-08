import java.util.ArrayList;
import processing.core.PApplet;
import processing.core.PImage;

public class Main  extends PApplet {

    ArrayList<FallingObject> objects;
    float basketX;
    int score = 0;
    PImage appleImg, bombImg;

    public  static  void  main(String[] args)
    {
        PApplet.main("Main");
    }

    public void settings()
    {
        size(800, 600);
    }

    public void setup()
    {
        objects = new ArrayList<FallingObject>();
        basketX = width / 2;
        appleImg = loadImage("sprites/apple.png");
        bombImg = loadImage("sprites/bomb.png");
    }

    public void draw()
    {
        background(200);

        if (frameCount % 30 == 0) {
            if (random(1) < 0.7) {
                objects.add(new Fruit(random(width), 0, random(2, 5)));
            } else {
                objects.add(new Bomb(random(width), 0, random(2, 5)));
            }
        }

        for (int i = objects.size() - 1; i >= 0; i--) {
            FallingObject obj = objects.get(i);
            obj.fall();
            if (obj instanceof Fruit) {
                obj.display(this, appleImg);
            } else if (obj instanceof Bomb) {
                obj.display(this, bombImg);
            }

            if (obj.y > height - 50 && abs(obj.x - basketX) < 25) {
                if (obj instanceof Fruit) {
                    score++;
                } else if (obj instanceof Bomb) {
                    score--;
                }
                objects.remove(i);
            } else if (obj.isOffScreen(height)) {
                objects.remove(i);
            }
        }

        fill(0, 0, 255);
        rect(basketX - 25, height - 50, 50, 20);

        fill(0);
        textSize(24);
        text("Score: " + score, 10, 25);
    }

    public void keyPressed() {
        if (keyCode == LEFT) {
            basketX -= 20;
        } else if (keyCode == RIGHT) {
            basketX += 20;
        }
    }
}

