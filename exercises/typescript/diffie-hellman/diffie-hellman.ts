const isPrime = (n: number): boolean => {
  // trial division algorithm
  // https://www.khanacademy.org/computing/computer-science/cryptography/comp-number-theory/a/trial-division
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

export class DiffieHellman {
  constructor(private readonly modulus: number, private readonly g: number) {
    if (!isPrime(modulus) || !isPrime(g)) {
      throw Error('Diffie-Hellman requires starting with prime numbers');
    }
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
