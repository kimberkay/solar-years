

export default class SolarYears {
  constructor(earthYears, earthExpectancy) {
    this.earthYears = earthYears;
    this.earthExpectancy = earthExpectancy;
    this.overExpectancy = this.overExpectancy;
  }
    
    yearsOver() {
      this.overExpectancy = (this.earthYears - earthExpectancy);
      return this.overExpectancy;
  }

}
