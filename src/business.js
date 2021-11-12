

export default class SolarYears {
  constructor(earthYears, earthExpectancy) {
    this.earthYears = earthYears;
    this.earthExpectancy = earthExpectancy;
  }
    
    overExpectancy() {
      let yearsOver = (this.earthExpectancy - this.earthYears);
      return yearsOver;
  }

}
