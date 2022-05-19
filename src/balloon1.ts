import { ParentBalloon } from './fixed/ParentBalloon';

//風船の設計図
class Balloon1 extends ParentBalloon {
  img: HTMLImageElement;
  
  //風船が持つ記憶
  imageX: number; //風船の位置のx座標
  imageY: number; //風船の位置のy座標

  // ↓最初に風船を作り出すときの処理
  constructor(img: HTMLImageElement) {
    super();
    this.img = img;
    //ここまでは変更しない (画像設定など)
  
    this.imageX = 0;    //記憶のimageXを0にする
    this.imageY = 100;  //記憶のimageYを100にする
  }

  // ↓フレームが進むたびに風船に起きる変化
  move() {
    this.imageX = this.imageX + 10;
  }

  // ↓フレームで風船を描画（今回は変更しない）
  draw(cntx: CanvasRenderingContext2D ): void {
    cntx.drawImage(this.img, this.imageX, this.imageY); 
  }
}

export { Balloon1 };