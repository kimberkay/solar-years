

export default class SolarYears {
  constructor(earthYears, earthExpectancy) {
    this.earthYears = earthYears;
    this.earthExpectancy = earthExpectancy;
  }
    
    yearsOver() {
      let overExpectancy = (this.earthYears - this.earthExpectancy);
      return overExpectancy;
  }

    mercuryYears() {
      let mercuryAge = Math.round(this.earthYears/.24);
      return mercuryAge;
    }

}
