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
  | 'UAA'
  | 'UAG'
  | 'UGA';
type Protein =
  | 'Methionine'
  | 'Phenylalanine'
  | 'Leucine'
  | 'Serine'
  | 'Tyrosine'
  | 'Cysteine'
  | 'Tryptophan'
  | 'STOP';
const CODON_TO_PROTEIN: Record<Codon, Protein> = {
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
    const element = rnaSequence.slice(index, index + 3);
    if (CODON_TO_PROTEIN[element as Codon] === 'STOP') break;
    codons.push(element as Codon);
  }
  return codons;
};

export function translate(rnaSequence: string): Protein[] {
  const codons = separateIntoCodons(rnaSequence);
  return codons.map((c) => CODON_TO_PROTEIN[c]);
}
