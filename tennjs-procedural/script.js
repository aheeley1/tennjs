let canvas = document.querySelector("#canvas");  // reference to canvas element
let ctx = canvas.getContext("2d"); //get canvas's drawing context
let width = canvas.width;
let height = canvas.height;



const BALL_SIZE = 5; //tue const identintifier
let ballPosition = {x:30,y:30};

let xSpeed = 4;
let ySpeed = 2;


//refactoring- changing the code without changing the behavior
//maintainability, readability
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,width,height);

    ctx.fillStyle = "white";
    ctx.fillRect(ballPosition.x,ballPosition.y,BALL_SIZE,BALL_SIZE);
}

//each frame, ball will move xSpeed pixels to the right and ySpeed pixels down
function update() {
    ballPosition.x += xSpeed;
    ballPosition.y += ySpeed;
}

function gameLoop() {
    draw();
    update();
    
    // call this function again after a timeout
    // 30ms, calls function once more
    setTimeout(gameLoop,30); 
}

gameLoop();


