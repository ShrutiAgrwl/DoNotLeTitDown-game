var block;
var score = 0, button;
function setup(){
    c = createCanvas(windowWidth, windowHeight);
    c.position(0, 0);
    button = createButton("Replay");
    button.position(width/2-40, height/2+20);
    button.mouseClicked(restart);
    button.hide();
    block = new Block;
}
function draw(){
    background(0);
    drawScore();
    block.display();
    block.move();
}
function drawScore(){
    textSize(30);
    fill(255);
    text("Score: " + score, 10, 30);
}
class Block{
    constructor(){
        this.x = width/2-20;
        this.y = 0;
        this.w = 40;
        this.dy = 2;
    }
    display(){
        fill(255, 40, 70);
        rect(this.x, this.y, this.w, this.w);
    }

    move(){
        if(this.y+40 >= height){
            this.dy = 0;
            textSize(50);
            fill(255, 0, 0);
            text('Game Over', width/2 - 120, height/2-20);
            button.show();
            noLoop();
        }
        else{
            this.y += this.dy;
        }
    }
}
function mousePressed(){
    block.dy = 0;
    score++;
}
function mouseReleased(){
    block.dy = 5;
}
function restart(){
    score = 0;
    block.y = 0;
    block.dy = 2;
    button.hide();
    loop();
}
