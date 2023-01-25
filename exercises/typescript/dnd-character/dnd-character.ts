const roundDownToNearestInt = (value: number): number => Math.floor(value);

function rollDice(): number {
  return roundDownToNearestInt(Math.random() * 7);
}

export class DnDCharacter {
  public constitution: number;
  public hitpoints: number;
  public strength: number;
  public dexterity: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;

  constructor() {
    this.constitution = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
  }

  public static generateAbilityScore(): number {
    const dieValues = [rollDice(), rollDice(), rollDice(), rollDice()]
      .sort()
      .slice(1);

    return dieValues.reduce((sum, addend) => sum + addend, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return roundDownToNearestInt((abilityValue - 10) / 2);
  }
}
