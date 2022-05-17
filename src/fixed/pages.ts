import { ParentBalloon } from './parentBalloon';
import { BalloonF } from '../final/balloonF';
import { Balloon1 } from '../balloon1';
import { Balloon2 } from '../balloon2';
import { Balloon3 } from '../balloon3';
import { Balloon4 } from '../balloon4';
import { Balloon5 } from '../balloon5';
import { Balloon6 } from '../balloon6';

interface Page{
  init(img: HTMLImageElement): void;
  render(cntx: CanvasRenderingContext2D): void;
  nextFrame(): void;
}

class PageF implements Page{
  private balloons: ParentBalloon[] = new Array(10);

  nextFrame(): void {
    for( let b of this.balloons){
      b.move();
    }
  }

  render(cntx: CanvasRenderingContext2D): void {
    for( let b of this.balloons){
      b.draw(cntx);
    }
  }

  public init(img: HTMLImageElement): void {
    for( let i = 0; i < this.balloons.length; i++){
      this.balloons[i] = new BalloonF(img);
    }
  }
}

class Page1 implements Page{
  private balloon: ParentBalloon;

  nextFrame(): void {
    this.balloon.move();
  }

  render(cntx: CanvasRenderingContext2D): void {
    this.balloon.draw(cntx);
  }

  public init(img: HTMLImageElement): void {
      this.balloon = new Balloon1(img);
  }
}

class Page2 implements Page{
  private balloons: ParentBalloon[] = new Array(1);

  nextFrame(): void {
    for( let b of this.balloons){
      b.move();
    }
  }

  render(cntx: CanvasRenderingContext2D): void {
    for( let b of this.balloons){
      b.draw(cntx);
    }
  }

  public init(img: HTMLImageElement): void {
    for( let i = 0; i < this.balloons.length; i++){
      this.balloons[i] = new Balloon2(img);
    }
  }
}

class Page3 implements Page{
  private balloons: ParentBalloon[] = new Array(1);

  nextFrame(): void {
    for( let b of this.balloons){
      b.move();
    }
  }

  render(cntx: CanvasRenderingContext2D): void {
    for( let b of this.balloons){
      b.draw(cntx);
    }
  }

  public init(img: HTMLImageElement): void {
    for( let i = 0; i < this.balloons.length; i++){
      this.balloons[i] = new Balloon3(img);
    }
  }
}


class Page4 implements Page{
  private balloons: ParentBalloon[] = new Array(2);

  nextFrame(): void {
    for( let b of this.balloons){
      b.move();
    }
  }

  render(cntx: CanvasRenderingContext2D): void {
    for( let b of this.balloons){
      b.draw(cntx);
    }
  }

  public init(img: HTMLImageElement): void {
    for( let i = 0; i < this.balloons.length; i++){
      this.balloons[i] = new Balloon4(img);
    }
  }
}

class Page5 implements Page{
  private balloons: ParentBalloon[] = new Array(5);

  nextFrame(): void {
    for( let b of this.balloons){
      b.move();
    }
  }

  render(cntx: CanvasRenderingContext2D): void {
    for( let b of this.balloons){
      b.draw(cntx);
    }
  }

  public init(img: HTMLImageElement): void {
    for( let i = 0; i < this.balloons.length; i++){
      this.balloons[i] = new Balloon5(img);
    }
  }
}

class Page6 implements Page{
  private balloons: ParentBalloon[] = new Array(10);

  nextFrame(): void {
    for( let b of this.balloons){
      b.move();
    }
  }

  render(cntx: CanvasRenderingContext2D): void {
    for( let b of this.balloons){
      b.draw(cntx);
    }
  }

  public init(img: HTMLImageElement): void {
    for( let i = 0; i < this.balloons.length; i++){
      this.balloons[i] = new Balloon6(img);
    }
  }
}

export { Page, PageF, Page1, Page2, Page3, Page4, Page5, Page6 };