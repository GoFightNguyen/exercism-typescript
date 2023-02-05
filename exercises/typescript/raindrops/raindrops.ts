export function convert(value: number): string {
  let sounds = '';
  if (!(value % 3)) sounds += 'Pling';
  if (!(value % 5)) sounds += 'Plang';
  if (!(value % 7)) sounds += 'Plong';
  return sounds === '' ? String(value) : sounds;
}
