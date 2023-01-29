export function isIsogram(candidate: string): boolean {
  candidate = candidate.replace(/\s+|\-+/, '').toLocaleLowerCase();
  const uniqueCharacters = new Set([...candidate]);
  return uniqueCharacters.size === candidate.length;
}
