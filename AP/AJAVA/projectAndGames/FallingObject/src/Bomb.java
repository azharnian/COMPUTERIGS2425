import processing.core.PApplet;
import processing.core.PImage;

class Bomb extends FallingObject {
    Bomb(float x, float y, float speed) {
        super(x, y, speed);
    }

    @Override
    void display(PApplet app, PImage img) {
        app.image(img, x - 10, y - 10, 30, 30);
    }
}