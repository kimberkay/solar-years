

export default class SolarYears {
  constructor(earthYears, earthExpectancy) {
    this.earthYears = earthYears;
    this.earthExpectancy = earthExpectancy;
    this.mercury = .24;
    this.jupiter = 11.86;
    this.venus = .62;
    this.mars = 1.88;
    
  }
    
    yearsOver() {
      let overExpectancy = (this.earthYears - this.earthExpectancy);
      return overExpectancy;
  }

    onAnotherPlanetAge() {
      let otherPlanetAge = Math.round(this.earthYears/this.jupiter);
      return otherPlanetAge;
  }

    expectancyOnAnotherPlanet() {
      let otherPlanetExpectancy = Math.round(this.earthExpectancy/this.mercury);
      return otherPlanetExpectancy;
    }    

  



    //  git add _tests_/test.js src/business.js
//  git commit -m "add "

}
