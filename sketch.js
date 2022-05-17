let notas = [];
let boneco;


let pi;
let fundo;
let piShow = '';


let digitsDiv;
let digits = "3.";
let piCounter = 0;

let gameOver = false;
let start;

function preload() {
  pi = loadStrings('one-million.txt');
  fundo = loadImage("fundo.png");
  
  Boneco.loadImage();
  Nota.loadImages();
}

function setup() {
  pi = pi.join('');
  createCanvas(windowWidth, windowHeight);
  boneco = new Boneco(width / 2, 50);
  piShow = pi.substring(0, 2);
  start = true;
  let col = color(25, 23, 200, 50);
 
  
}

function draw() {
  background(fundo);
  if (gameOver) {
    push()
    imageMode(CENTER)
    let scale = min(width, height)
   
    fill(112, 50, 126);
    textAlign(CENTER, BOTTOM);
    text("Game Over!",width/2, 2*height/3);


    text("Press p to play again.",width/2, 5*height/6)
    pop()
    return;
  }
  if(start){
    push();
    textSize(48);
    imageMode(CENTER)
    let scale = min(width, height)
    
    fill(112, 50, 126);
    textAlign(CENTER, BOTTOM);
    text("Bem-vindo ao jogo de La Casa de Papel", width/2, height/2);
    textSize(28);
    text("Press p to play!",width/2, 5*height/6)
    pop()
    return;
    
  }
  
  
  fill(255);
  textSize(48);
  text(piShow, width-64, 50);
  fill(0,255,0);
  text(piShow.charAt(0), width-64, 50);
  fill(0,0,255);
  textSize(48);
  let overflow = (digits.length>5);
  text("💵:"+(overflow?"...":"")+digits.slice(-10), 18, 50);

  
  
  if (random(1) < 0.1) {
    notas.push(new Nota(random(width), random(-100, -20)));
  }

  for (let nota of notas) {
    nota.show();
    nota.update();
    
  }
  

  for (let i = notas.length - 1; i >= 0; i--) {
    if (boneco.catches(notas[i])) {
      // catch the pie
      // Check what digit was caught and deal with score!
      let digit = notas[i].digit;
      
      let correctDigit = pi.charAt(piCounter)
      if (correctDigit == digit) {
        console.log("💵");
        digits += digit;
        piCounter++;
        piShow = pi.substring(piCounter, piCounter + 2);
      } else {
        gameOver = true;
       
      }
      

      notas.splice(i, 1);
    } else if (notas[i].y > height + notas[i].r) {
      // eat the pie?
      notas.splice(i, 1);
    }
  }

  boneco.x = mouseX;
  boneco.show();
}

function keyPressed(){
  if(keyCode =="80" && (gameOver||start)){
    digits="3.";
    boneco = new Boneco(width / 2, 50);
    piShow = pi.substring(0, 2);
    piCounter = 0;
    notas=[]
    start=false;
    gameOver=false;
    
  }
}

function copyScore(index){
return function(){
  let scoreString = encodeURIComponent("Eu apanhei: "+digits+" notas!");
  
 
}
}