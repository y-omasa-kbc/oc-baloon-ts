import { ParentBaloon } from './parentBaloon';
import { BaloonF } from '../final/baloonF';
import { Baloon1 } from '../baloon1';
import { Baloon2 } from '../baloon2';
import { Baloon3 } from '../baloon3';
import { Baloon4 } from '../baloon4';

interface Page{
  init(img: HTMLImageElement): void;
  render(cntx: CanvasRenderingContext2D): void;
  nextFrame(): void;
}

class PageF implements Page{
  private baloons: ParentBaloon[] = new Array(10);

  nextFrame(): void {
    for( let b of this.baloons){
      b.move();
    }
  }

  render(cntx: CanvasRenderingContext2D): void {
    for( let b of this.baloons){
      b.draw(cntx);
    }
  }

  public init(img: HTMLImageElement): void {
    for( let i = 0; i < this.baloons.length; i++){
      this.baloons[i] = new BaloonF(img);
    }
  }
}

class Page1 implements Page{
  private baloon: ParentBaloon;

  nextFrame(): void {
    this.baloon.move();
  }

  render(cntx: CanvasRenderingContext2D): void {
    this.baloon.draw(cntx);
  }

  public init(img: HTMLImageElement): void {
      this.baloon = new Baloon1(img);
  }
}

class Page2 implements Page{
  private baloons: ParentBaloon[] = new Array(1);

  nextFrame(): void {
    for( let b of this.baloons){
      b.move();
    }
  }

  render(cntx: CanvasRenderingContext2D): void {
    for( let b of this.baloons){
      b.draw(cntx);
    }
  }

  public init(img: HTMLImageElement): void {
    for( let i = 0; i < this.baloons.length; i++){
      this.baloons[i] = new Baloon2(img);
    }
  }
}

class Page3 implements Page{
  private baloons: ParentBaloon[] = new Array(1);

  nextFrame(): void {
    for( let b of this.baloons){
      b.move();
    }
  }

  render(cntx: CanvasRenderingContext2D): void {
    for( let b of this.baloons){
      b.draw(cntx);
    }
  }

  public init(img: HTMLImageElement): void {
    for( let i = 0; i < this.baloons.length; i++){
      this.baloons[i] = new Baloon3(img);
    }
  }
}


class Page4 implements Page{
  private baloons: ParentBaloon[] = new Array(2);

  nextFrame(): void {
    for( let b of this.baloons){
      b.move();
    }
  }

  render(cntx: CanvasRenderingContext2D): void {
    for( let b of this.baloons){
      b.draw(cntx);
    }
  }

  public init(img: HTMLImageElement): void {
    for( let i = 0; i < this.baloons.length; i++){
      this.baloons[i] = new Baloon4(img);
    }
  }
}

export { Page, PageF, Page1, Page2, Page3, Page4 };