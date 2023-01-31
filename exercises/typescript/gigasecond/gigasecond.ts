export class Gigasecond {
  private static readonly milliseconds = 1_000 * 1_000_000_000;

  constructor(private readonly moment: Date) {}

  public date(): Date {
    return new Date(this.moment.getTime() + Gigasecond.milliseconds);
  }
}
