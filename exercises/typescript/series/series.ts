export class Series {
  constructor(private readonly series: string) {
    if(!series) throw new Error('series cannot be empty')
  }

  slices(sliceLength: number): number[][] {
    if (sliceLength > this.series.length)
      throw new Error('slice length cannot be greater than series length');

    if (sliceLength === 0) throw new Error('slice length cannot be zero');

    if(sliceLength < 0) throw new Error('slice length cannot be negative');

    const allSeries: number[][] = [];
    const digits = [...this.series].map((n) => Number(n));

    while (digits.length >= sliceLength) {
      const series = digits.slice(0, sliceLength);
      allSeries.push(series);
      digits.shift();
    }
    return allSeries;
  }
}
