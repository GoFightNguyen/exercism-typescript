export class Gigasecond {
  private static readonly SECONDS = 1e9;
  private static readonly MILLISECONDS = 1_000 * Gigasecond.SECONDS;

  constructor(private readonly moment: Date) {}

  public date(): Date {
    return new Date(this.moment.getTime() + Gigasecond.MILLISECONDS);
  }
}
