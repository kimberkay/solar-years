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

  test('should correctly return the age of a person in Mercury years', () => {
    const myYears = new SolarYears(41,85);
    expect(myYears.mercuryYears()).toEqual(171);
  });  

  test('should correctly refactor mercuryYears to work for all planets', () => {
    const myYears = new SolarYears(41,85);
    const mercury = .24;
    expect(myYears.onAnotherPlanetAge()).toEqual(171);
});




//  git add _tests_/test.js src/business.js
//  git commit -m "add "
});