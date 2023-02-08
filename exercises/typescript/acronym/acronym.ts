export function parse(phrase: string): string {
  const indexOfColon = phrase.indexOf(':');
  if (indexOfColon >= 0) return phrase.substring(0, indexOfColon);

  const initials = phrase.match(/\b(\w)|[A-Z]/g) ?? [];
  return initials.join('').toUpperCase();
}
