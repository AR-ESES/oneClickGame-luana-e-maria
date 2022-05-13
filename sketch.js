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

  createCanvas(windowWidth, windowHeight);
  boneco = new boneco(width / 2, 50);
 
  start = true;
  let col = color(25, 23, 200, 50);
  platform=0;
  for(let i =0; i <4; i++){
    button = createButton(platforms[i]);
    button.style('background-color', col);
    button.size(width/8, height/16)
    button.position(width/2+3*width/16-(2.5*i*width/16), 23*height/32);
    button.style("border-radius:10px");
    button.style("font-size : 20px");
    button.mousePressed(copyScore(i))
    button.hide();
    shareButtons.push(button);
  }
}

function draw() {
  background(fundo);
 
  if (gameOver) {
    push()
    imageMode(CENTER)
    let scale = min(width, height)

    fill(112, 50, 126);
    textAlign(CENTER, BOTTOM);
    text("Game Over.",width/2, 2*height/3);
}
  
textSize(28);
  text("Press p to play again.",width/2, 5*height/6)
    pop()
    return;
}

if(start){
    push();
    textSize(48);
    imageMode(CENTER)
    let scale = min(width, height)
    image(logo, width/2, height/5, scale/2, scale/4)
    fill(112, 50, 126);
    textAlign(CENTER, BOTTOM);
    text("Bem vindo ao jogo La Casa de Papel", width/2, height/2);
    textSize(28);
    text("Press p to play!",width/2, 5*height/6)
    pop()
   return;
}


