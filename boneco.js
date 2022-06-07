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

  catches(nota) {
    if (nota.y + nota.r >= this.y && nota.x+nota.r > this.x-this.w/2 && nota.x-nota.r < this.x + this.w/2){
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
