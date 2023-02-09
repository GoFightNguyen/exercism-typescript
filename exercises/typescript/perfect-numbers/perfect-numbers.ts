type NICOMACHUS_CLASSIFICATION = 'perfect' | 'abundant' | 'deficient';

function findFactorsOf(num: number): number[] {
  let factors: number[] = [];
  for (let candidate = 1; candidate < num; candidate++) {
    if (num % candidate === 0) factors.push(candidate);
  }
  return factors;
}

const sum = (numbers: number[]): number =>
  numbers.reduce((agg, current) => (agg += current), 0);

export function classify(num: number): NICOMACHUS_CLASSIFICATION {
  if (num < 1)
    throw new Error('Classification is only possible for natural numbers.');

  let factors = findFactorsOf(num);
  let aliquotSum = sum(factors);
  if (aliquotSum === num) return 'perfect';
  else if (aliquotSum > num) return 'abundant';

  return 'deficient';
}
