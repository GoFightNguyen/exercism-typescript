export function toRna(dna: string): string {
  let rnaComplement = '';
  for (const dnaNucleotide of dna) {
    rnaComplement += dnaNucleotideToRnaNucleotide(dnaNucleotide);
  }
  return rnaComplement;
}
function dnaNucleotideToRnaNucleotide(dna: string): string {
  switch (dna) {
    case 'C':
      return 'G';
    case 'G':
      return 'C';
    case 'A':
      return 'U';
    case 'T':
      return 'A';
    default:
      throw new Error('Invalid input DNA.');
  }
}
