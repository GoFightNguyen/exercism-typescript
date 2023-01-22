export function isLeap(year: number): boolean {
  return (
    isEvenlyDivisable(year, 400) ||
    (isEvenlyDivisable(year, 4) && !isEvenlyDivisable(year, 100))
  );
}

function isEvenlyDivisable(dividend: number, divisor: number): boolean {
  return dividend % divisor === 0;
}
