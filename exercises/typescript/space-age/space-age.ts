const OrbitalPeriodsInEarthYears: Record<string, number> = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

type Planet = keyof typeof OrbitalPeriodsInEarthYears;

export function age(planet: Planet, seconds: number): number {
  const earthOrbitalSeconds = 31_557_600;

  let orbitalSecondsInEarthYears = earthOrbitalSeconds * OrbitalPeriodsInEarthYears[planet];
  const age = (seconds / orbitalSecondsInEarthYears).toFixed(2);
  return Number(age);
}

/*
 (31557600 s / 1 earth year) = (orbitalSecondsInEarthYears / orbitalPeriodInEarthYears)
 orbitalSecondsInEarthYears = (31557600 * orbitalPeriodInEarthYears)
*/
