export function compute(left: string, right: string): number {
  if (left.length !== right.length)
    throw new Error('DNA strands must be of equal length.');

  return [...left].reduce(
    (hammingDistance, letter, index) =>
      (hammingDistance += letter === right[index] ? 0 : 1),
    0
  );
}
