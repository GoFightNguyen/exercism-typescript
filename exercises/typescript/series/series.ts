export class Series {
  constructor(private readonly series: string) {
    if (!series) throw new Error('series cannot be empty');
  }

  slices(sliceLength: number): number[][] {
    this.validateSliceLength(sliceLength);

    const allSeries: number[][] = [];

    const digits = [...this.series].map((n) => Number(n));
    for (let start = 0; start <= digits.length - sliceLength; start++) {
      allSeries.push(digits.slice(start, start + sliceLength));
    }

    return allSeries;
  }

  private validateSliceLength(sliceLength: number): void {
    if (sliceLength > this.series.length)
      throw new Error('slice length cannot be greater than series length');

    if (sliceLength === 0) throw new Error('slice length cannot be zero');

    if (sliceLength < 0) throw new Error('slice length cannot be negative');
  }
}
