export const cat = {
    x : 100,
    y : 100,
    isShowed : true,
    height : '50px',
    width : '50px',
    name : "bobby",
    age : 10,
    legs : 3,
    type : "mujair",
    owner : "prabowo",
    skin : {
        normal : "assets/cat.webp",
        sleep : "assets/cat_sleep.jpeg",
        eat : "assets/cat_eat.jpeg",
    },
    element : document.createElement('img'),
    show : function() {
        this.element.classList.add("cat");
        this.element.style.display = "block";
        this.element.src = this.skin.normal;
        this.element.style.width = this.width;
        this.element.style.height = this.height;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        document.querySelector('.arena').append(this.element);
    },
    hide : function(){
        this.element.style.display = "none";
    },
    sleep(){
        this.element.src = this.skin.sleep;
    },
    eat() {
        this.element.src = this.skin.eat;
    }
}
