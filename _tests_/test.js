import SolarYears from './../src/SolarYears.js';

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
 
  test('should correctly return age in Mercury years', () => {
    const myYears = new SolarYears(41,85);
    expect(myYears.mercuryAge()).toEqual(171);
});

test('should correctly return expectancy in Mercury years', () => {
  const myYears = new SolarYears(41,85);
  expect(myYears.mercuryExpectancy()).toEqual(354);
});

test('should correctly return years left or over on Mercury with message for each scenario', () => {
  const myYears = new SolarYears(41,85);
  expect(myYears.mercuryYearsLeftOrOver()).toEqual("\"You have 183 years left. Go have more fun!\"")
});

test('should correctly return years left or over on Mercury with message for each scenario', () => {
  const olderYears = new SolarYears(87,85);
  expect(olderYears.mercuryYearsLeftOrOver()).toEqual(`"You are 8 years over your expected years. Go have more fun!`)
});

test('should correctly return age in Mars years', () => {
  const myYears = new SolarYears(41,85);
  expect(myYears.marsAge()).toEqual(22);
});

test('should correctly return expectancy in Mars years', () => {
const myYears = new SolarYears(41,85);
expect(myYears.marsExpectancy()).toEqual(45);
});

test('should correctly return years left or over on Mercury with message for each scenario', () => {
const myYears = new SolarYears(41,85);
expect(myYears.marsYearsLeftOrOver()).toEqual("\"You have 23 years left. Go have more fun!\"")
});

test('should correctly return years left or over on Mercury with message for each scenario', () => {
const olderYears = new SolarYears(87,85);
expect(olderYears.marsYearsLeftOrOver()).toEqual(`"You are 1 years over your expected years. Go have more fun!`)
});

});










