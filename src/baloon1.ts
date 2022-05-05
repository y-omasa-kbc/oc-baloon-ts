import { ParentBaloon } from './fixed/ParentBaloon';

export class Baloon1 extends ParentBaloon {
  img: HTMLImageElement;
  
  //風船が持つ記憶
  imageX: number; //風船の位置のx座標
  imageY: number; //風船の位置のy座標

  constructor(img: HTMLImageElement) {
    super();
    this.img = img;
    //ここまでは変更しない (画像設定など)
  
    this.imageX = 0;    //記憶のimageXを0にする
    this.imageY = 100;  //記憶のimageYを100にする
  }

  move() {
    this.imageX = this.imageX + 10;
  }

  draw(cntx: CanvasRenderingContext2D ): void {
    cntx.drawImage(this.img, this.imageX, this.imageY); 
  }
}