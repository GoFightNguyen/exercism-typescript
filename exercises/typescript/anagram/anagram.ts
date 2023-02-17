class Word {
  readonly lowered: string;
  readonly normalized: string;

  constructor(original: string) {
    this.lowered = original.toLowerCase();
    this.normalized = [...this.lowered].sort().toString();
  }

  public isNot(other: Word): boolean {
    return this.lowered !== other.lowered;
  }

  public hasTheSameLettersAs(other: Word): boolean {
    return this.normalized === other.normalized;
  }
}

export class Anagram {
  private readonly word: Word;

  constructor(input: string) {
    this.word = new Word(input);
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter((p) => this.isAnAnagram(new Word(p)));
  }

  private isAnAnagram(candidate: Word): boolean {
    return (
      this.word.isNot(candidate) && this.word.hasTheSameLettersAs(candidate)
    );
  }
}
