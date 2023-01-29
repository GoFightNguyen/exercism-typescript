const isShouting = (message: string): boolean => {
  const hasLetters = /[a-z]/i;
  const hasAnyLowercaseLetters = /[a-z]/;
  return hasLetters.test(message) && !hasAnyLowercaseLetters.test(message);
};

const isQuestion = (message: string): boolean => message.endsWith('?');
const isSilent = (message: string): boolean => !message;

export function hey(message: string): string {
  message = message.trim();
  if (isSilent(message)) return 'Fine. Be that way!';

  if (isShouting(message)) {
    return isQuestion(message)
      ? "Calm down, I know what I'm doing!"
      : 'Whoa, chill out!';
  }

  return isQuestion(message) ? 'Sure.' : 'Whatever.';
}
