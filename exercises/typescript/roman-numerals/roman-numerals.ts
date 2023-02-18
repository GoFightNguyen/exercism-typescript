export const toRoman = (normal: number): string => {
  let roman = '';

  while (Math.floor(normal / 1000) > 0) {
    roman += 'M';
    normal -= 1000;
  }

  while (Math.floor(normal / 900) > 0) {
    roman += 'CM';
    normal -= 900;
  }

  while (Math.floor(normal / 500) > 0) {
    roman += 'D';
    normal -= 500;
  }

  while (Math.floor(normal / 400) > 0) {
    roman += 'CD';
    normal -= 400;
  }
  while (Math.floor(normal / 100) > 0) {
    roman += 'C';
    normal -= 100;
  }
  while (Math.floor(normal / 90) > 0) {
    roman += 'XC';
    normal -= 90;
  }

  while (Math.floor(normal / 50) > 0) {
    roman += 'L';
    normal -= 50;
  }

  if (Math.floor(normal / 40) > 0) {
    roman += 'XL';
    normal -= 40;
  }
  while (Math.floor(normal / 10) > 0) {
    roman += 'X';
    normal -= 10;
  }
  if (normal === 9) {
    roman += 'IX';
    normal -= 9;
  }

  if (normal >= 5) {
    roman += 'V';
    normal -= 5;
  }
  if (normal === 4) {
    roman += 'IV';
    normal -= 4;
  }
  while (normal > 0) {
    roman += 'I';
    normal--;
  }

  return roman;
};
