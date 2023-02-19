export function compute(left: string, right: string): number {
  if (left.length !== right.length)
    throw new Error('DNA strands must be of equal length.');

  let hammingDistance = 0;
  [...left].forEach((l, index) => {
    if (l !== right[index]) hammingDistance++;
  });
  return hammingDistance;
}
