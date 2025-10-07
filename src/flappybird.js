
let board;
let boardHeight=640;
let boardWidth=360;
let context;

let birdWidth= 34;
let birdHeight= 24;
let birdX= boardWidth /8;
let birdY= (boardHeight / 2) - (birdHeight / 2);
let birdImg;

let pipeWidth= 50;
let pipeHeight = 512;
let pipeX = 200;
let pipeY = 0;

let topPipeImg;
let bottompipeImg;
 
window.onload = function(){
  board = document.getElementById("board");
board.height = boardHeight;
board.width = boardWidth;
context = board.getContext("2d");

birdImg = new Image();
birdImg.src= "./flappybird.png";
  topPipeImg = new Image();
  topPipeImg.src= "./toppipe.png";
  bottompipeImg = new Image();
  bottompipeImg.src= "./bottompipe.png";
birdImg.onload = function(){
  context.drawImage(birdImg, birdX, birdY, birdWidth, birdHeight);
};
  topPipeImg.onload = function(){
  context.drawImage(topPipeImg,   pipeX ,pipeY- pipeHeight / 4,  pipeWidth,  pipeHeight);
};
  bottompipeImg.onload = function(){
  context.drawImage(bottompipeImg, pipeX, pipeY + pipeHeight / 2 + 250, pipeWidth, pipeHeight);
};

};

