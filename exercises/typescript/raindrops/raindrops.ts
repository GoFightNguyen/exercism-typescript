const isAFactor = (num: number, sound: string) => (value: number) =>
  value % num ? '' : sound;

const is3AFactor = isAFactor(3, 'Pling');
const is5AFactor = isAFactor(5, 'Plang');
const is7AFactor = isAFactor(7, 'Plong');

export function convert(value: number): string {
  let sounds = is3AFactor(value) + is5AFactor(value) + is7AFactor(value);
  return sounds === '' ? String(value) : sounds;
}
