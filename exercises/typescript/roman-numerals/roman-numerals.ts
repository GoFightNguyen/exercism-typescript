const NORMAL_TO_ROMAN_MAPPING = new Map<number, string>([
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]);

export const toRoman = (normal: number): string => {
  let roman = '';

  for (const [value, romanNumeral] of NORMAL_TO_ROMAN_MAPPING.entries()) {
    if (normal >= value) {
      roman += romanNumeral.repeat(normal / value);
      normal %= value;
    }
  }

  return roman;
};
