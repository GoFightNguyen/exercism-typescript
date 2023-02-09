type NICOMACHUS_CLASSIFICATION = 'perfect' | 'abundant' | 'deficient';

function getFactorsOf(num: number): number[] {
  let factors: number[] = [];
  for (let candidate = 1; candidate < num; candidate++) {
    if (num % candidate === 0) factors.push(candidate);
  }
  return factors;
}

export function classify(num: number): NICOMACHUS_CLASSIFICATION {
  if (num < 1)
    throw new Error('Classification is only possible for natural numbers.');

  let factors = getFactorsOf(num);
  let aliquotSum = factors.reduce((sum, current) => (sum += current), 0);
  if (aliquotSum === num) return 'perfect';
  else if (aliquotSum > num) return 'abundant';

  return 'deficient';
}
