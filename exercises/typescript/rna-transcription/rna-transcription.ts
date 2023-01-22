export function toRna(dnaStrand: string): string {
  let rnaStrand = '';
  for (const dnaNucleotide of dnaStrand) {
    rnaStrand += toRnaNucleotide(dnaNucleotide);
  }
  return rnaStrand;
}

function toRnaNucleotide(dnaNucleotide: string): string {
  switch (dnaNucleotide) {
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
