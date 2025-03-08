import java.util.ArrayList;
import processing.core.PApplet;
import processing.core.PImage;
import processing.data.JSONObject;
import java.io.File;


public class Main  extends PApplet {

    ArrayList<FallingObject> objects;
    float basketX;
    int score = 0;
    PImage basketImg, appleImg, bombImg;
    String playerName = "";
    boolean gameStarted = false;
    ArrayList<PImage> pokemonImages;
    String[] pokemonNames = {"Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon"};


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
        objects = new ArrayList<>();
        pokemonImages = new ArrayList<>();
        basketX = (float) width / 2;
        basketImg = loadImage("sprites/basket.jpeg");
        appleImg = loadImage("sprites/apple.png");
        bombImg = loadImage("sprites/bomb.png");

        for (int i = 1; i <= 5; i++) {
            String url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";
            PImage img = loadImage(url);
            pokemonImages.add(img);
        }
    }

    public void draw()
    {
        background(200);

        if (!gameStarted) {
            showIntro();
        } else {
            playGame();
        }
    }

    public void keyPressed() {
        if (!gameStarted) {
            if (key == ENTER) {
                gameStarted = true;
                loadHighScore();
            } else if (key == BACKSPACE && !playerName.isEmpty()) {
                playerName = playerName.substring(0, playerName.length() - 1);
            } else if (key != BACKSPACE) playerName += key;
        } else {
            if (keyCode == LEFT) {
                basketX -= 20;
            } else if (keyCode == RIGHT) {
                basketX += 20;
            }
        }
    }

    public void exit() {
        saveHighScore();
        super.exit();
    }


    public void showIntro() {
        fill(0);
        textSize(32);
        textAlign(CENTER);
        text("Enter your name: " + playerName, (float) width / 2, (float) height / 2);
        text("Press ENTER to start", (float) width / 2, (float) height / 2 + 50);
    }

    public void playGame() {
        if (frameCount % 60 == 0) {
            int choice = (int) random(3);
            if (choice == 0) {
                int index = (int) random(pokemonImages.size());
                objects.add(new Pokemon(random(width), 0, random(2, 5), pokemonNames[index], pokemonImages.get(index)));
            } else if (choice == 1) {
                objects.add(new Fruit(random(width), 0, random(2, 5), appleImg));
            } else {
                objects.add(new Bomb(random(width), 0, random(2, 5), bombImg));
            }
        }

        for (int i = objects.size() - 1; i >= 0; i--) {
            FallingObject obj = objects.get(i);
            obj.display(this);
            obj.fall();

            if (obj.y > height - 50 && abs(obj.x - basketX) < 25) {
                if (obj instanceof Bomb) {
                    score -= 5;
                } else {
                    score++;
                }
                objects.remove(i);
            } else if (obj.isOffScreen(height)) {
                objects.remove(i);
            }
        }

        fill(0, 0, 255);
        image(basketImg, basketX - 25, height - 50, 50, 50);

        fill(0);
        textSize(24);
        text("Score: " + score, 10, 25);
    }

    public void loadHighScore() {
        File file = new File(dataPath("highscores.json"));
        if (file.exists()) {
            JSONObject data = loadJSONObject("highscores.json");
            if (data.hasKey(playerName)) {
                int highScore = data.getInt(playerName);
                println("Welcome back, " + playerName + "! Your high score: " + highScore);
            } else {
                println("Welcome, " + playerName + "! No high score yet.");
            }
        }
    }

    public void saveHighScore() {
        JSONObject data = new JSONObject();
        File file = new File(dataPath("highscores.json"));
        if (file.exists()) {
            data = loadJSONObject("highscores.json");
        }

        if (!data.hasKey(playerName) || score > data.getInt(playerName)) {
            data.setInt(playerName, score);
            saveJSONObject(data, "data/highscores.json");
            println("New high score saved for " + playerName + "!");
        }
    }
}

