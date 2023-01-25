const roundDownToNearestInt = (value: number): number => Math.floor(value);

function rollDice(): number {
  return roundDownToNearestInt(Math.random() * 7);
}

export class DnDCharacter {
  public readonly constitution = DnDCharacter.generateAbilityScore();
  public readonly hitpoints =
    10 + DnDCharacter.getModifierFor(this.constitution);
  public readonly strength = DnDCharacter.generateAbilityScore();
  public readonly dexterity = DnDCharacter.generateAbilityScore();
  public readonly intelligence = DnDCharacter.generateAbilityScore();
  public readonly wisdom = DnDCharacter.generateAbilityScore();
  public readonly charisma = DnDCharacter.generateAbilityScore();

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
