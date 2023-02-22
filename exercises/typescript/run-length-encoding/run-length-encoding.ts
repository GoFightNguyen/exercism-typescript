export function encode(original: string): string {
  if (!original) return '';

  let runsIndex = 0;
  let previousLetter = original[0];
  const runs: string[] = [previousLetter];

  for (let index = 1; index < original.length; index++) {
    const currentLetter = original[index];
    if (currentLetter === previousLetter) {
      runs[runsIndex] += currentLetter;
    } else {
      runs.push(currentLetter);
      previousLetter = currentLetter;
      runsIndex++;
    }
  }

  return runs.map((r) => (r.length === 1 ? r : `${r.length}${r[0]}`)).join('');
}

const getEncodedRuns = (compressed: string): string[] =>
  // something about this split and regex causes entries of ''
  compressed.split(/(\d*[a-zA-Z]{1})/).filter((r) => r !== '');

export function decode(compressed: string): string {
  let decoded = '';
  const runs = getEncodedRuns(compressed);
  runs.forEach((r) => {
    if (r.length === 1) {
      decoded += r;
    } else {
      const runLength = Number(r.slice(0, -1));
      decoded += r.at(-1)!.repeat(runLength);
    }
  });

  return decoded;
}
