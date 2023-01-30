export function count(phrase: string): Map<string, number> {
  const words = phrase
    .toLocaleLowerCase()
    .trim()
    .replace(/\s+/, ' ')
    .split(' ');
  const counts = new Map<string, number>();
  words.forEach((w) => {
    let count = counts.get(w) ?? 0;
    counts.set(w, count + 1);
  });
  return counts;
}
