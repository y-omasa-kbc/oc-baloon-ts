import { ParentBalloon } from './fixed/ParentBalloon';

//風船の設計図
class Balloon5 extends ParentBalloon {
  img: HTMLImageElement;
  
  //風船が持つ記憶
  imageX: number; //風船の位置のx座標
  imageY: number; //風船の位置のy座標
  changeX: number; //風船の移動量x軸
  changeY: number; //風船の移動量Y軸

  // ↓最初に風船を作り出すときの処理
  constructor(img: HTMLImageElement) {
    super();
    this.img = img;
    //ここまでは変更しない (画像設定など)
  
    this.imageX = Math.random()*600;    //記憶のimageXを50にする
    this.imageY = Math.random()*600;  //記憶のimageYを300にする
    this.changeY = -1;
  }

  // ↓フレームが進むたびに風船に起きる変化
  move() {
    this.imageY = this.imageY + this.changeY;
  }

  // ↓フレームで風船を描画（今回は変更しない）
  draw(cntx: CanvasRenderingContext2D ): void {
    cntx.drawImage(this.img, this.imageX, this.imageY); 
  }
}

export { Balloon5 };