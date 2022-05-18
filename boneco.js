class Boneco {
  
  static loadImage(){
    this.image = loadImage("boneco.png");
  }
  
  constructor(x, w) {
    this.x = x;
    this.w = 150;
    this.h = 150;
    this.y = height - this.h;
  }

  catches(notas) {
    if (notas.y + notas.r >= this.y && notas.x+notas.r > this.x-this.w/2 && notas.x-notas.r < this.x + this.w/2) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    push()
    imageMode(CENTER);
    image(Boneco.image,this.x,this.y,this.w,this.h) 
    pop()

  }
}
