export function isIsogram(candidate: string): boolean {
  candidate = candidate.replace(/\s+|\-+/, '').toLocaleLowerCase();
  const uniqueCharacters = new Set([...candidate]);
  let temp = '';
  uniqueCharacters.forEach((c) => (temp += c));
  return candidate === temp;
}
