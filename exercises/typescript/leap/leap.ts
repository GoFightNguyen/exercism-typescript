export function isLeap(year: number): boolean {
  if (isEvenlyDivisable(year, 400)) return true;
  return isEvenlyDivisable(year, 4) && !isEvenlyDivisable(year, 100);
}

function isEvenlyDivisable(dividend: number, divisor: number): boolean {
  return dividend % divisor === 0;
}
