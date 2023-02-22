const isPrime = (n: number): boolean => {
  // trial division algorithm
  // https://www.khanacademy.org/computing/computer-science/cryptography/comp-number-theory/a/trial-division
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

export class DiffieHellman {
  private readonly g: number;
  private readonly modulus: number;

  constructor(p: number, g: number) {
    if (!isPrime(p) || !isPrime(g)) {
      throw Error('Diffie-Hellman requires starting with prime numbers');
    }

    this.modulus = p;
    this.g = g;
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey > 1 && privateKey < this.modulus) {
      return this.g ** privateKey % this.modulus;
    }

    throw new Error('The privateKey must be > 1 and less than "p"');
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey ** myPrivateKey % this.modulus;
  }
}
