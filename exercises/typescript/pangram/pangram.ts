export function isPangram(sentence: string): boolean {
  const uniqueLettersUsed = new Set(sentence.toLocaleLowerCase().match(/[a-z]/g));
  return uniqueLettersUsed.size === 26;
}
