export function count(phrase: string): Map<string, number> {
  const counts = new Map<string, number>();
  phrase
    .toLocaleLowerCase()
    .match(/\S+/g)
    ?.forEach((w) => {
      let c = counts.get(w) ?? 0;
      counts.set(w, c + 1);
    });
    
  return counts;
}
