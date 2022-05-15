import { ParentBaloon } from '../fixed/ParentBaloon';

class BaloonF extends ParentBaloon {
  img: HTMLImageElement;
  
  imageX: number;
  imageY: number;
  changeX: number;
  changeY: number;

  constructor(img: HTMLImageElement) {
    super();
    this.img = img;
  
    this.imageX = Math.random() * (600-50);
    this.imageY = Math.random() * (600-65);
    this.changeX = (Math.random()*2-1)*0.5;
    this.changeY = (Math.random()*2-1)*0.5;
  }

  move() {
    this.imageX += this.changeX;
    this.imageY += this.changeY;
    if(this.imageX < 0){
      this.changeX *= -1;
    }
    if(this.imageX > 600-50){
      this.changeX *= -1;
    }
    if(this.imageY < 0){
      this.changeY *= -1;
    }
    if(this.imageY > 600-65){
      this.changeY *= -1;
    }
  }

  draw(cntx: CanvasRenderingContext2D ): void {
    cntx.drawImage(this.img, this.imageX, this.imageY); 
  }
}

export { BaloonF };