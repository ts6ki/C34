var ball;
var database;

function setup(){
    createCanvas(500,500);
    
    database = firebase.database();
    
    ball = createSprite(20,20,10,10);
    ball.shapeColor = "red";
    var ballPos = database.ref('ball/position');
    ballPos.on("value", readData);
}

function readData(data){
    position=data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        x: position.x + x,
        y: position.y + y
    })
}
