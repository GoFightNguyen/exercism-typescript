export function isArmstrongNumber(value: number): boolean {
  const stringified = String(value);
  const numberOfDigits = stringified.length;
  const x = [...stringified]
    .map((n) => Number(n) ** numberOfDigits)
    .reduce((agg, curr) => (agg += curr), 0);
  return x === value;
}
