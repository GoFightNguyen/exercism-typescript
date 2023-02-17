class Word {
  readonly lowered: string;
  readonly normalized: string;

  constructor(original: string) {
    this.lowered = original.toLowerCase();
    this.normalized = [...this.lowered].sort().toString();
  }
}

export class Anagram {
  private readonly word: Word;

  constructor(input: string) {
    this.word = new Word(input);
  }

  public matches(...potentials: string[]): string[] {
    const theMatches: string[] = [];
    potentials.forEach((p) => {
      const candidate = new Word(p);
      if (this.isAnAnagram(candidate)) theMatches.push(p);
    });
    return theMatches;
  }

  private isAnAnagram(candidate: Word): boolean {
    return (
      this.word.lowered !== candidate.lowered &&
      this.word.normalized === candidate.normalized
    );
  }
}
