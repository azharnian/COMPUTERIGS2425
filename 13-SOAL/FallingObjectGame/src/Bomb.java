import processing.core.PApplet;
import processing.core.PImage;

class Bomb extends FallingObject {

    int width = 30;
    int height = 30;

    Bomb(float x, float y, float speed) {
        super(x, y, speed);
    }

    @Override
    void display(PApplet app, PImage img) {
        app.image(img, x - 10, y - 10, width, height);
    }
}