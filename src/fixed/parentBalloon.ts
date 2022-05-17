export abstract class ParentBalloon {
  constructor() {}
  abstract move(): void;
  abstract draw(cntx: CanvasRenderingContext2D ): void;
}