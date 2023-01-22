/**
 * `as const` (const assertion) changes the type from string[] to a literal type
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
 */
export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;

/**
 * create a  type of the array COLORS accessed at any index (Index Access Types).
 * since number can take any numeric value,
 * the type created is a union type of all the possible accessed entries of the array.
 *
 * https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 */
type Color = typeof COLORS[number];

export const colorCode = (color: Color): number => {
  return COLORS.indexOf(color);
};
