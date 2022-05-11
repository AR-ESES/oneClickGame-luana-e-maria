let boneco;
let bImg;
let nImg;
let fImg;
let mImg;
let aImg;

let gameOver = false;
let start;

function preload() {
  fundo = loadImage("fundo.png");
notas.loadImage();
  boneco.loadImages();
}

function setup() {
  createCanvas(600,450);
  boneco = new Boneco ();
}

function draw() {
  background(fundo);
  boneco.show ();
}

