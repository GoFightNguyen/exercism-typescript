type DNA_Nucleotides = 'G' | 'C' | 'T' | 'A';
type RNA_Nucleotides = 'C' | 'G' | 'A' | 'U';
type DnaStrand = DNA_Nucleotides[];

// using a record at least ensures that all DNA_Nucleotides are used.
// Could have been a map, but the error when missing a DNA_Nucleotides was harder to read
const DNA_TO_RNA: Record<DNA_Nucleotides, RNA_Nucleotides> = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export function toRna(dnaInput: string): string {
  const regex = new RegExp('^[GCTA]+$');
  if (!regex.test(dnaInput)) throw new Error('Invalid input DNA.');
  const dnaStrand = dnaInput as unknown as DnaStrand;

  let rnaStrand = '';
  for (const dnaNucleotide of dnaStrand) {
    rnaStrand += DNA_TO_RNA[dnaNucleotide];
  }

  return rnaStrand;
}
