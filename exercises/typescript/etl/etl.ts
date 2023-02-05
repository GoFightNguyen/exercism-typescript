interface OldScrabbleSystem {
  [index: string]: string[];
}

interface NewScrabbleSystem {
  [index: string]: number;
}

export function transform(old: OldScrabbleSystem): NewScrabbleSystem {
  const transformed: NewScrabbleSystem = {};

  for (const [score, letters] of Object.entries(old)) {
    letters.forEach(
      (l) => (transformed[l.toLocaleLowerCase()] = Number(score))
    );
  }
  return transformed;
}
