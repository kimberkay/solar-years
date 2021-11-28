

export default class SolarYears {
  constructor(earthYears, earthExpectancy, age, expectancy) {
    this.earthYears = earthYears;
    this.earthExpectancy = earthExpectancy;
    this.mercury = .24;
    this.jupiter = 11.86;
    this.venus = .62;
    this.mars = 1.88;
    this.age = 0;
    this.expectancy = 0;
    
  }
    
    yearsOver() {
      let overExpectancy = (this.earthYears - this.earthExpectancy);
      return overExpectancy;
    }

    mercuryAge() {
      this.age = Math.round(((this.earthYears/0.24) * 100)/100);
      return this.age;
    }

    mercuryExpectancy() {
      this.expectancy = Math.round(((this.earthExpectancy/this.mercury)*100)/100);
      return this.expectancy;
  }    

    /*yearsLeftOnMercury() {
      let yearsLeft = Math.round(this.mercuryExpectancy()-this.mercuryAge());
      return yearsLeft;
  }

    yearsOverMercury() {
      let yearsOver = Math.round(this.yearsOver()/this.mercury)
      return yearsOver;
  }*/
}

