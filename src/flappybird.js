let board;
let boardHeight = 640;
let boardWidth = 360;
let context;

let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2 ;
let birdImg;

let pipeWidth = 64;
let pipeHeight = 512;
let pipes = [];
let topPipeImg;
let bottompipeImg;
let gap = 150;

let velocityY = 0;
let gravity = 0.4;
let jumpower = -6;
let pipeSpeed = -2;

let frame = 0;
//yyyyy


window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

  birdImg = new Image();
  birdImg.src = "./flappybird.png";
  topPipeImg = new Image();
  topPipeImg.src = "./toppipe.png";
  bottompipeImg = new Image();
  bottompipeImg.src = "./bottompipe.png";
  birdImg.onload = function () {
    requestAnimationFrame(update);
  };

document.addEventListener("keyword", moveBird);
document.addEventListener("click", () =>
{
  velocityY = jumpower;
});
    
  };
  function update() {
  requestAnimationFrame(update);
  context.clearRect(0,0, board.width,board.height);

  velocityY += gravity;
  birdY += velocityY;
  if (birdY + birdHeight > boardHeight)
     {
    birdY = boardHeight - birdHeight;
    velocityY = 0;
  }

  if(birdY < 0) {
    birdY = 0;
    velocityY = 0;
  }
  frame++;
  if(frame % 100 === 0) {
  let randomY = -pipeHeight / 4 -
  Math.random() * (pipeHeight / 2);
  
  pipes.push ({
    
    x: boardWidth,
    y: randomY,
  });
}
  for (let i = 0; i < pipes.length; i++)
  {
    let pipe = pipes[i];
    pipe.x += pipeSpeed;
    context.drawImage(topPipeImg,pipe.x,pipe.y,pipeWidth,pipeHeight);
    context.drawImage(bottompipeImg,pipe.x,pipe.y+pipeHeight+gap,pipeWidth,pipeHeight);
    context.drawImage(birdImg,birdX,birdY,birdWidth,birdHeight);
  }
if (pipes.length > 0 && pipes[0].x < -pipeWidth) {
  pipes.shift();
}



  pipes.push ({
    img: bottompipeImg,
    x: boardWidth,
    y: toppipeY + pipeHeight + gap, 
    width:pipeWidth,
    height:pipeHeight
  });

  

  
   
    
    
  
  }
function moveBird(e) {

if (e.code=="space" ) {

 velocityY = jumpower;
}
}




