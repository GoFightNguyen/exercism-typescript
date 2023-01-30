export function count(phrase: string): Map<string, number> {
  const counts = new Map<string, number>();
  const words = phrase
    .toLocaleLowerCase()
    .match(/\S+/g)
    ?.forEach((w) => {
      let count = counts.get(w) ?? 0;
      counts.set(w, count + 1);
    });
    
  return counts;
}
