import processing.core.PApplet;
import processing.core.PImage;

class Fruit extends FallingObject {
    PImage img;

    Fruit(float x, float y, float speed, PImage img) {
        super(x, y, speed);
        this.img = img;
    }

    @Override
    void display(PApplet app) {
        app.image(img, x, y, 50, 50);
    }
}