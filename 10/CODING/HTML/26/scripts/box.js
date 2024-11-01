export const box = {
    x : 0,
    y : 0,
    isShowed : true,
    height : '50px',
    width : '50px',
    color : 'red',
    element : document.createElement('div'),
    show : function() {
        this.element.style.display = 'block';
        this.element.style.position = 'absolute';
        this.element.style.height = this.height;
        this.element.style.width = this.width;
        this.element.style.backgroundColor = this.color;
        document.querySelector('.arena').append(this.element);
    },
    hide : function() {
        this.element.style.display = 'none';
    },
    moveRight : function(step = 10) {
        this.x += step;
        this.element.style.left = `${this.x}px`;
    },
    moveLeft : function(step = 10) {
        this.x -= step;
        this.element.style.left = `${this.x}px`;
    },
    moveDown : function(step = 10){
        this.y += step;
        this.element.style.top = `${this.y}px`;
    },
    moveUp : function(step = 10){
        this.y -= step;
        this.element.style.top = `${this.y}px`;
    }
}
