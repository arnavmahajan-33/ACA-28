var rabbit; 
var carrot; 
var end;
var plate1, plate2;

function setup() {

    createCanvas(1100,730);
    end = createEdgeSprites();

    rabbit = createSprite(100, 640, 28,28);
    carrot = createSprite(1000, 70, 38, 38);
    plate1 = createSprite(150, 290, 180, 19);
    plate2 = createSprite(151, 440, 180, 19);

    rabbit.shapeColor = "white";
    carrot.shapeColor = "orangered";
    plate1.shapeColor = "blue";
    plate2.shapeColor = "blue";

    plate1.velocityX = 15;
    plate2.velocityX = 19;

    snake_1 = new Group();
    snake_2 = new Group();
}

function draw() {
    
    background(0);

    stroke("white");
    textSize(20);
    
    snakes();



    {

        if(keyDown("up")){
            rabbit.y = rabbit.y-5;
        }

        if(keyDown("down")){
            rabbit.y = rabbit.y+5;
        }

        if(keyDown("left")){
            rabbit.x = rabbit.x-5.7;
        }

        if(keyDown("right")){
            rabbit.x = rabbit.x+5.7;
        }
    }
        

    
    {    
        for(var i = 0;i < (snake_1).length; i++){
            var gSk_1 = (snake_1).get(i);
            if(rabbit.isTouching(gSk_1)){
                gSk_1.destroy();
                gSk_1=null;
                rabbit.x = 100;
                rabbit.y = 640;
            }
        }

        for(var a = 0; a < (snake_2).length; a++){
            var gSk_2 = (snake_2).get(a);
            if(rabbit.isTouching(gSk_2)){
                gSk_2.destroy();
                gSk_2 = null;
                rabbit.x = 100;
                rabbit.y = 640;
            }
        } 

        if(rabbit.isTouching(plate2)){
            rabbit.x = 100;
            rabbit.y = 640;

        }

        if(rabbit.isTouching(plate1)){
            rabbit.x = 100;
            rabbit.y = 640;
        }

        if(rabbit.isTouching(carrot)){
            text("RABBIT GOT HIS CARROT... AMAZING!!!", 300, 50)
            stroke("blue")
        }
    }



    {
        rabbit.bounceOff(end[0]);
        rabbit.bounceOff(end[1]);
        rabbit.bounceOff(end[2]);
        rabbit.bounceOff(end[3]);

        plate1.bounceOff(end[0]);
        plate1.bounceOff(end[1]);

        plate2.bounceOff(end[0]);
        plate2.bounceOff(end[1]);
    }


    drawSprites();

}

function snakes(){
    if(frameCount % 50 === 0){
        var snake1 = createSprite(1150, 170, random(190, 250),15);
        snake1.shapeColor = "orange";
        snake1.velocityX = random(-8, -20);

        var snake2 = createSprite(1150, 580, random(190, 250), 15);
        snake2.shapeColor = "orange";
        snake2.velocityX = random(-8, -15);
        snake_1.add(snake1);
        snake_2.add(snake2);
    }
}