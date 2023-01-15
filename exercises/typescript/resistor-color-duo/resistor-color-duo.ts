export function decodedValue([color1, color2]: string[]): number {
  const resistorBandEncodings: Record<string, string> = {
    black: '0',
    brown: '1',
    red: '2',
    orange: '3',
    yellow: '4',
    green: '5',
    blue: '6',
    violet: '7',
    grey: '8',
    white: '9',
  };
  const resistance1 = resistorBandEncodings[color1];
  const resistance2 = resistorBandEncodings[color2];
  return parseInt(resistance1 + resistance2);
}
