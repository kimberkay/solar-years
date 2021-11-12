

export default class SolarYears {
  constructor(earthYears, earthExpectancy) {
    this.earthYears = earthYears;
    this.earthExpectancy = earthExpectancy;
    this.mercury = .24;
    this.jupiter = 11.86;
  }
    
    yearsOver() {
      let overExpectancy = (this.earthYears - this.earthExpectancy);
      return overExpectancy;
  }

    mercuryYears() {
      let mercuryAge = Math.round(this.earthYears/.24);
      return mercuryAge;
    }

    onAnotherPlanetAge() {
      let otherPlanetAge = Math.round(this.earthYears/this.jupiter);
      return otherPlanetAge;
    }
    //  git add _tests_/test.js src/business.js
//  git commit -m "add "

}
