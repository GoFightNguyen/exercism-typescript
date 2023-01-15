enum ResistorBandEncodings {
  black = '0',
  brown = '1',
  red = '2',
  orange = '3',
  yellow = '4',
  green = '5',
  blue = '6',
  violet = '7',
  grey = '8',
  white = '9',
}

type Color = keyof typeof ResistorBandEncodings;

export function decodedValue([color1, color2]: Color[]): number {
  const resistance1 = ResistorBandEncodings[color1];
  const resistance2 = ResistorBandEncodings[color2];
  return parseInt(resistance1 + resistance2);
}
