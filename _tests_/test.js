import SolarYears from './../src/business.js';

describe('SolarYears', () => {

  test('should correctly create a SolarYears object with earthYears and earthExpectancy', () => {
    const myYears = new SolarYears(41, 85);
    expect(myYears.earthYears).toEqual(41);
    expect(myYears.earthExpectancy).toEqual(85); 
  });
  test('should correctly get the number of years a person is over their life expectancy', () => {
    const myYears = new SolarYears(41,85);
    expect(myYears.yearsOver()).toEqual(-44);
  });
 
  test('should correctly refactor mercuryYears to work for all planets', () => {
    const myYears = new SolarYears(41,85);
    expect(myYears.onAnotherPlanetAge()).toEqual(171); 
});

test('should correctly return life expectancy on another planet', () => {
  const myYears = new SolarYears(41,85);
  expect(myYears.expectancyOnAnotherPlanet()).toEqual(354); 
});

test('should correctly return years left on other planets', () => {
  const myYears = new SolarYears(41,85);
  expect(myYears.yearsLeftOnOtherPlanet()).toEqual(183); 
});

test('should correctly return planet years over life expectancy', () => {
  const elder = new SolarYears(92,85)
  expect(elder.yearsOverOnOtherPlanet()).toEqual(29)
});








});