export function isIsogram(candidate: string): boolean {
  candidate = candidate
    .replaceAll('-', '')
    .replaceAll(' ', '')
    .toLocaleLowerCase();
  const uniqueCharacters = new Set([...candidate]);
  let temp = '';
  uniqueCharacters.forEach((c) => (temp += c));
  return candidate === temp;
}
