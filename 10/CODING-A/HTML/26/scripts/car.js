export class Car {

    constructor(make, model, year, color = "Black", image = "assets/agya.webp"){
        this.x = 0;
        this.y = 0;
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.isMatic = false;
        this.image = image;
        this.element = document.createElement("img");

        this.element.style.position = "absolute";
    }

    show(){
        this.element.src = this.image;
        this.element.style.width = '300px';
        document.querySelector(".arena").append(this.element);
    }

    hide(){
        this.element.style.display = "None"
    }

    resize(width, height){
        this.element.style.width = width;
        this.element.style.height = height;
    }

    moveRight(x = 1){
        this.x += x
        this.element.style.left = `${this.x}px`;
    }

    moveLeft(x = 1){
        this.x -= x;
        this.element.style.left = `${this.x}px`;
    }

    moveDown(y = 1){
        this.y += y;
        this.element.style.top = `${this.y}px`;
    }

    moveUp(y = 1){
        this.y -= y;
        this.element.style.top = `${this.y}px`;
    }

}