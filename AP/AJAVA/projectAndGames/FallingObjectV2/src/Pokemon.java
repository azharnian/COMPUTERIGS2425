import processing.core.PApplet;
import processing.core.PImage;

class Pokemon extends FallingObject {
    String name;
    PImage img;

    Pokemon(float x, float y, float speed, String name, PImage img) {
        super(x, y, speed);
        this.name = name;
        this.img = img;
    }

    @Override
    void display(PApplet app) {
        app.image(img, x - 10, y - 10, 50, 50);
        app.fill(0);
        app.textSize(14);
        app.textAlign(PApplet.CENTER);
        app.text(name, x, y - 15);
    }
}