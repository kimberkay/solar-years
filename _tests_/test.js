import SolarYears from './../src/business.js';

describe('SolarYears', () => {

  test('should correctly create a SolarYears object with earthYears and earthExpectancy', () => {
    const myYears = new SolarYears(41, 85);
    expect(myYears.earthYears).toEqual(41);
    expect(myYears.earthExpectancy).toEqual(85); 
  });
  test('should correctly get the number of years a person is past their life expectancy', () => {
    const myYears = new SolarYears(41,85);
    let yearsOver = 0
    expect(SolarYears.overExpectancy).toEqual(44);
  });


});