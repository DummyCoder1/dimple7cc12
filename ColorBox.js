class ColorBox {
  
    //Add code inside the constructor:
    constructor(x, y, w, h, color) {
    this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.color=color;
    }

    //make the color boxes appear on canvas
    appear()
    {
      stroke(0);
      strokeWeight(1);
      fill(this.color);
      rect(this.x, this.y, this.w, this.h);
    }
}