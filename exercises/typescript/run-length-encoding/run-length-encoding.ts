const getRuns = (original: string): string[] => original.match(/(.)\1*/g) ?? [];

const encodeRun = (run: string): string =>
  run.length === 1 ? run : `${run.length}${run[0]}`;

export function encode(original: string): string {
  if (!original) return '';

  return getRuns(original).reduce(
    (encoded, run) => (encoded += encodeRun(run)),
    ''
  );
}

const getEncodedRuns = (compressed: string): string[] =>
  // something about this split and regex causes entries of ''
  compressed.split(/(\d*[a-zA-Z]{1})/).filter((r) => r !== '');

const decodeRun = (run: string): string => {
  if (run.length === 1) {
    return run;
  }

  const runLength = Number(run.slice(0, -1));
  return run[run.length - 1].repeat(runLength);
};

export function decode(compressed: string): string {
  return getEncodedRuns(compressed).reduce(
    (decoded, run) => (decoded += decodeRun(run)),
    ''
  );
}
