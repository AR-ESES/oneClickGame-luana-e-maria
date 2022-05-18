class Nota {
  
  static loadImage(){
    this.image = loadImage("nota.png");
  }
  
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 32;
    this.yspeed = 0;
  
   
  }
  
  show() {
    push();
    
    translate(this.x, this.y);
   
    
    pop();
   
  }
  
  update() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + 0.2;
  }
  
  static loadImages(){
    this.notas = [];
    
    
  }  
}
