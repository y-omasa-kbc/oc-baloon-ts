export abstract class ParentBaloon {
  constructor() {}
  abstract move(): void;
  abstract draw(cntx: CanvasRenderingContext2D ): void;
}