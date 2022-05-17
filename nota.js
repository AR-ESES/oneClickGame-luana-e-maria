class Nota {
  
  static loadImage(){
    this.image = loadImage("notas.png");
  }
  
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 32;
    this.yspeed = 0;
    this.digit = floor(random(10));
    this.angle = random(TWO_PI);
    this.colour = Math.floor(random(4))
  }
  
  show() {
    push();
    
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER)
    image(Nota.notas[this.colour][this.digit],0,0,this.r*2,this.r*2)
    
    //stroke(255);
    //strokeWeight(1);
    //fill(177,176,180,200);
    //circle(0, 0, this.r * 2);   
    
    //for (let i = 0; i < 9; i++) {
    //let a = TWO_PI/9;
    //let d = this.r * 2;
    //for (let i = 0; i < this.digit; i++) {
    //  fill(255,0,255);
    //  stroke(255);
    //strokeWeight(4);
    //  arc(0, 0, d, d, i*a, (i+1)*a, PIE);
    //}
    pop();
    //}
    
    // textSize(32);
    // textAlign(CENTER,CENTER);
    // text(this.digit, this.x, this.y);
  }
  
  update() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + 0.2;
  }
  
  static loadImages(){
    this.notas = [];
    let colours = ["Blue","Orange","Pink","Yellow"]
    for(let colour of colours){
      let notasColour = []
      for(let i= 0; i<10 ;i++){
        notaColour.push(loadImage("Notas/Nota_"+colour+"-0"+i+".png"))
      }
      this.notas.push(notaColour);
    }
  }  
}