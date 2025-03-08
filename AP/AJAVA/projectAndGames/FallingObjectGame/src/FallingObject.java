import processing.core.PApplet;
import processing.core.PImage;

public abstract class FallingObject {
    float x, y;
    float speed;

    FallingObject(float x, float y, float speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    abstract void display(PApplet app, PImage img);

    void fall() {
        y += speed;
    }

    boolean isOffScreen(float height) {
        return y > height;
    }
}