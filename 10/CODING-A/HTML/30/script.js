// console.log("it works!");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;
const blockSize = 20;
const widthInBlocks = width/blockSize;
const heightInBlocks = height/blockSize;

let score = 0;

const border = {
    color : "black",
    blockSize : blockSize,
    width : width,
    height : height,

    draw : function () {
        ctx.fillStyle = this.color;
        const top = ctx.fillRect(0, 0, this.width, this.blockSize);
        const bottom = ctx.fillRect(0, this.height-this.blockSize, this.width, this.blockSize);
        const left = ctx.fillRect(0, 0, this.blockSize, this.height);
        const right = ctx.fillRect(this.width-this.blockSize, 0, this.blockSize, this.height);
    }
}

class Block {

    constructor (row, column){
        this.row = row;
        this.column = column;

        this.blockSize = blockSize;
    }

    drawSquare(color){
        let x = this.row * this.blockSize;
        let y = this.column * this.blockSize;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, this.blockSize, this.blockSize);
    }

    fillCircle(x, y, radius, color, isFilled){
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2*Math.PI, false);
        ctx.stroke();
        if (isFilled){
            ctx.fillStyle = color;
            ctx.fill();
        }	
    }

    drawCircle(color){
        let centerX = this.row*this.blockSize + this.blockSize /2;
        let centerY = this.column*this.blockSize + this.blockSize /2;
        this.fillCircle(centerX, centerY, this.blockSize/2, color, true);
    }

}

class Apple{
    constructor(){
        this.blockSize = blockSize;
        this.block = new Block(0, 0);
    }

    draw(){
        this.block.drawCircle("LimeGreen");
    }

    move(){
        let randomCol = Math.floor(Math.random() * (widthInBlocks-2)) + 1;
        let randomRow = Math.floor(Math.random() * (heightInBlocks-2)) + 1;

        this.block = new Block(randomRow, randomCol);
    }

}

border.draw();
const apple = new Apple();
apple.move();
apple.draw();