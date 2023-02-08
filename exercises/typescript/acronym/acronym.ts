export function parse(phrase: string): string {
  const indexOfColon = phrase.indexOf(':');
  if (indexOfColon >= 0) return phrase.substring(0, indexOfColon);

  return phrase
    .split(/[\s-]|(?=[A-Z])/)
    .map((w) => w[0].toUpperCase())
    .join('');
}
