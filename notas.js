class notas {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 32;
    this.yspeed = 0;
    this.digit = floor(random(10));
    
    this.colour = Math.floor(random(4))
  }
  
  show() {
    push();
    
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER)
    image(notas.notas[this.colour][this.digit],0,0,this.r*2,this.r*2)
    
      pop();
    
     }
  
  update() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + 0.2;
  }