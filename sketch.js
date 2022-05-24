let notas = [];
let boneco;

let fundo;

let gameOver = false;
let start;

function preload() {
  
  fundo = loadImage("fundo.png");
  
  Boneco.loadImage();
  Nota.loadImages();
}

function setup() {
 
  createCanvas(windowWidth, windowHeight);
  boneco = new Boneco (width / 2, 50);
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
   
    
    fill(255,0,0);
    textAlign(CENTER, BOTTOM);

    
     textSize(40);
    text("Bem-vindo ao jogo de La Casa de Papel!", width/2, height/2);
   
    
    fill (0,0,0);
    text("Press p to play!",width/2, 5*height/6)
    pop()
    return;
    
  }
  
  
  
  fill(255);
  textSize(48);
  
  fill(0,255,0);
 
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
     
      let digit = notas[i].digit;
      
      

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
