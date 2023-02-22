function getDigits(value: number): number[] {
  return [...String(value)].map((n) => Number(n));
}

export function isArmstrongNumber(value: number): boolean {
  const digits = getDigits(value);
  const numberOfDigits = digits.length;
  const x = digits
    .map((n) => n ** numberOfDigits)
    .reduce((agg, curr) => (agg += curr), 0);
  return x === value;
}
