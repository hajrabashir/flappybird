let board;
let boardHeight = 640;
let boardWidth = 360;
let context;

let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2 ;
let birdImg;


let velocityY = 0;
let gravity = 0.1;
let jumpower = -3;

let gameState = "RUNNING";



window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

  birdImg = new Image();
  birdImg.src = "./flappybird.png";
  birdImg.onload = function () {
    context.drawImage(birdImg, birdX,birdY,birdWidth,birdHeight)
  };
    requestAnimationFrame(update);
  

document.addEventListener("keydown", moveBird);
document.addEventListener("click", moveBird);
document.addEventListener("keydown",restartGame);

};
    
  
  function update() {
  requestAnimationFrame(update);
  context.clearRect(0,0, board.width,board.height);
  if(gameState === "RUNNING") {

  velocityY += gravity;
  birdY += velocityY;
  if (birdY + birdHeight > boardHeight)
     {
      birdY = boardHeight - birdHeight;
      gameState ="GAME_OVER";
    
  }
  if(birdY < 0) {
    birdY = 0;
    gameState= 'GAME_OVER';
  }
context.drawImage(birdImg, birdX,birdY,birdWidth,birdHeight);
  }
  else if (gameState === "GAME_OVER"){
    context.fillStyle = "red";
    context.font = "bold 32px Arial";
    context.fillText("GAME OVER", 80,250);
    context.fillStyle="White";
    context.font = "16px Arial";
    context.fillText ("press R to Restart",110,280);

  }
}
function moveBird(e) {
  if (gameState === "RUNNING" && (e.code === "Space"|| e.type === "Click")){
    velocityY = jumpower;
  }
}
function restartGame(e) {
  if(gameState === "GAME_OVER" && e.code === "KeyR"){
  birdY = boardHeight /2;
  velocity = 0;
  gameState = "RUNNING";
  }
}
















 




