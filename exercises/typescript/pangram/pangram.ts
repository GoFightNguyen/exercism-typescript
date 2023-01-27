const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export function isPangram(sentence: string): boolean {
  const lowered = sentence.toLocaleLowerCase();
  for (const letter of alphabet) {
    if (!lowered.includes(letter)) return false;
  }
  return true;
}
