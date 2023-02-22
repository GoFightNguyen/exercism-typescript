const isPrime = (n: number): boolean => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

export class DiffieHellman {
  private readonly g: number;
  private readonly p: number;

  constructor(p: number, g: number) {
    if (!isPrime(p))
      throw Error('Diffie-Hellman requires the supplied "p" be a prime number');
    if (!isPrime(g))
      throw Error('Diffie-Hellman requires the supplied "g" be a prime number');

    this.p = p;
    this.g = g;
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('The privateKey must be > 1 and less than "p"');
    }

    // ** is the exponentiation operator
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
    return this.g ** privateKey % this.p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey ** myPrivateKey % this.p;
  }
}
