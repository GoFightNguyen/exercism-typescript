export class Squares {
  constructor(private readonly count: number) {}

  get sumOfSquares(): number {
    let n = this.count;
    return (n * (n + 1) * (2 * n + 1)) / 6;
  }

  get squareOfSum(): number {
    let n = this.count;
    let sum = (n / 2) * (n + 1);
    return Math.pow(sum, 2);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
