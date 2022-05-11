class boneco {
  
  static loadImage(){
    this.image = loadImage("boneco.png");
  }
  
  constructor(x, w) {
    this.x = x;
    this.w = w;
    this.h = 10;
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
    image(boneco.image,this.x,this.y,this.w,this.h) 
    pop()
//rect(this.x, this.y, this.w, this.h);
  }
}
