export class Triangle {
  private readonly sides: number[];
  private readonly isValid: boolean;

  constructor(...sides: number[]) {
    this.sides = sides;
    this.isValid = Triangle.isValid(...sides);
  }

  get isEquilateral(): boolean {
    return this.isValid && this.sides.every((s) => s === this.sides[0]);
  }

  get isIsosceles(): boolean {
    return this.isValid && !this.isScalene;
  }

  get isScalene(): boolean {
    return (
      this.isValid &&
      this.sides.every((side, index) => this.sides.lastIndexOf(side) === index)
    );
  }

  private static isValid(...sides: number[]): boolean {
    if (sides.every((s) => s === 0)) return false;

    const a = sides[0],
      b = sides[1],
      c = sides[2];
    return a + b >= c && a + c >= b && b + c > a;
  }
}
