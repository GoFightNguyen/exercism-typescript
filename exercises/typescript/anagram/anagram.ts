class Word {
  private readonly lowered: string;
  private readonly alphabetized: string;

  constructor(original: string) {
    this.lowered = original.toLowerCase();
    this.alphabetized = [...this.lowered].sort().toString();
  }

  public isNot(other: Word): boolean {
    return this.lowered !== other.lowered;
  }

  public hasTheSameLettersAs(other: Word): boolean {
    return this.alphabetized === other.alphabetized;
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
