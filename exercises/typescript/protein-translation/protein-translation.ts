type TerminatingCodon = 'UAA' | 'UAG' | 'UGA';
type Codon =
  | 'AUG'
  | 'UUU'
  | 'UUC'
  | 'UUA'
  | 'UUG'
  | 'UCU'
  | 'UCC'
  | 'UCA'
  | 'UCG'
  | 'UAU'
  | 'UAC'
  | 'UGU'
  | 'UGC'
  | 'UGG'
  | TerminatingCodon;
type AminoAcid =
  | 'Methionine'
  | 'Phenylalanine'
  | 'Leucine'
  | 'Serine'
  | 'Tyrosine'
  | 'Cysteine'
  | 'Tryptophan'
  | 'STOP';
const CODON_TO_AMINO_ACID: Record<Codon, AminoAcid> = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
};

const separateIntoCodons = (rnaSequence: string): Codon[] => {
  const codons: Codon[] = [];
  for (let index = 0; index < rnaSequence.length; index += 3) {
    const nucleotideSequence = rnaSequence.slice(index, index + 3);
    codons.push(nucleotideSequence as Codon);
  }
  return codons;
};

const translateToAminoAcid = (codon: Codon): AminoAcid =>
  CODON_TO_AMINO_ACID[codon];

export function translate(rnaSequence: string): AminoAcid[] {
  const codons = separateIntoCodons(rnaSequence);
  const aminoAcids = codons.map((c) => translateToAminoAcid(c));
  const terminatingIndex = aminoAcids.findIndex((c) => c === 'STOP');
  return aminoAcids.slice(
    0,
    terminatingIndex < 0 ? undefined : terminatingIndex
  );
}
