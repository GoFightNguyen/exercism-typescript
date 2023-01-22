type DNA_Nucleotides = 'G' | 'C' | 'T' | 'A';
type RNA_Nucleotides = 'C' | 'G' | 'A' | 'U';

const DNA_TO_RNA: Record<DNA_Nucleotides, RNA_Nucleotides> = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export function toRna(dnaStrand: string): string {
  const regex = new RegExp('^[GCTA]+$');
  if (!regex.test(dnaStrand)) throw new Error('Invalid input DNA.');

  let rnaStrand = '';
  for (const dnaNucleotide of dnaStrand) {
    rnaStrand += DNA_TO_RNA[dnaNucleotide as DNA_Nucleotides];
  }
  return rnaStrand;
}
