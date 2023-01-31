export class Squares {
  private readonly naturalNumbers: number[];
  constructor(count: number) {
    this.naturalNumbers = Array(count)
      .fill(0)
      .map((_, i) => i + 1);
  }

  get sumOfSquares(): number {
    let sum = 0;
    this.naturalNumbers.forEach((n) => (sum += Math.pow(n, 2)));
    return sum;
  }

  get squareOfSum(): number {
    let sum = 0;
    this.naturalNumbers.forEach((n) => (sum += n));
    return Math.pow(sum, 2);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
