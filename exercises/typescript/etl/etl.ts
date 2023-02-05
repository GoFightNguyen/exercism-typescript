interface OldScrabbleSystem {
  [index: string]: string[];
}

interface NewScrabbleSystem {
  [index: string]: number;
}

export function transform(old: OldScrabbleSystem): NewScrabbleSystem {
  const transformed: NewScrabbleSystem = {};
  for (const score in old) {
    old[score]
      .map((letter) => letter.toLocaleLowerCase())
      .forEach((l) => (transformed[l] = Number(score)));
  }
  return transformed;
}
