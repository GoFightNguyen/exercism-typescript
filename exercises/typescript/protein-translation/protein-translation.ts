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
const TERMINATING_AMINO_ACID = 'STOP' as const;
type AminoAcid =
  | 'Methionine'
  | 'Phenylalanine'
  | 'Leucine'
  | 'Serine'
  | 'Tyrosine'
  | 'Cysteine'
  | 'Tryptophan'
  | typeof TERMINATING_AMINO_ACID;
type Protein = AminoAcid[];
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
  UAA: TERMINATING_AMINO_ACID,
  UAG: TERMINATING_AMINO_ACID,
  UGA: TERMINATING_AMINO_ACID,
};

const separateIntoCodons = (rnaSequence: string): Codon[] => {
  return rnaSequence.match(/.{3}/g)!.map((codon) => codon as Codon);
};

const translateToAminoAcid = (codon: Codon): AminoAcid =>
  CODON_TO_AMINO_ACID[codon];

const takeUntilTerminated = (protein: Protein): Protein => {
  const terminatingIndex = protein.findIndex((c) => c === TERMINATING_AMINO_ACID);
  return terminatingIndex === -1 ? protein : protein.slice(0, terminatingIndex);
};

export function translate(rnaSequence: string): Protein {
  const codons = separateIntoCodons(rnaSequence);
  const protein = codons.map((c) => translateToAminoAcid(c));
  return takeUntilTerminated(protein);
}
