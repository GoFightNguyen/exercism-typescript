enum ResistorBandEncodings {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

type Color = keyof typeof ResistorBandEncodings;

export function decodedResistorValue([
  color1,
  color2,
  color3,
]: Color[]): string {
  const totalOhms = calculateTotalResistanceValue(color1, color2, color3);

  return totalOhms > 1000
    ? totalOhms / 1000 + ' kiloohms'
    : totalOhms + ' ohms';
}

function calculateTotalResistanceValue(
  color1: Color,
  color2: Color,
  color3: Color
): number {
  const resistance1 = ResistorBandEncodings[color1];
  const resistance2 = ResistorBandEncodings[color2];
  const mainValue = resistance1 * 10 + resistance2;

  const powerOf10 = Math.pow(10, Number(ResistorBandEncodings[color3]));
  return mainValue * powerOf10;
}
