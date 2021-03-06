

export default class SolarYears {
  constructor(earthYears, earthExpectancy, age, expectancy) {
    this.earthYears = earthYears;
    this.earthExpectancy = earthExpectancy;
    this.mercury = 0.24;
    this.jupiter = 11.86;
    this.venus = 0.62;
    this.mars = 1.88;
    this.age = 0;
    this.expectancy = 0;
    
  }
    
    yearsOver() {
      let overExpectancy = (this.earthYears - this.earthExpectancy);
      return overExpectancy;
    }

    mercuryAge() {
      this.age = Math.round(((this.earthYears/this.mercury) * 100)/100);
      return this.age;
    }

    mercuryExpectancy() {
      this.expectancy = Math.round(((this.earthExpectancy/this.mercury)*100)/100);
      return this.expectancy;
    }    

    mercuryYearsLeftOrOver() {
      let mercuryExpectancy = parseInt(Math.round((this.yearsOver()/this.mercury * 100)/100));
      if(mercuryExpectancy >= 0) {
        return `"You are ${mercuryExpectancy} years over your expected years. Go have more fun!`;
      } else if (mercuryExpectancy < 0) {
      return `"You have ${(Math.abs(mercuryExpectancy))} years left. Go have more fun!"`
      }
    } 

    marsAge() {
     this.age = Math.round(((this.earthYears/this.mars) * 100)/100);
      return this.age;
    }

    marsExpectancy() {
      this.expectancy = Math.round(((this.earthExpectancy/this.mars)*100)/100);
      return this.expectancy;
    }    

    marsYearsLeftOrOver() {
      let marsExpectancy = parseInt(Math.round((this.yearsOver()/this.mars * 100)/100));
      if(marsExpectancy >= 0) {
        return `"You are ${marsExpectancy} years over your expected years. Go have more fun!`;
      } else if (marsExpectancy < 0) {
        return `"You have ${(Math.abs(marsExpectancy))} years left. Go have more fun!"`
      }
    } 

    jupiterAge() {
      this.age = Math.round(((this.earthYears/this.jupiter) * 100)/100);
      return this.age;
    }

    jupiterExpectancy() {
      this.expectancy = Math.round(((this.earthExpectancy/this.jupiter)*100)/100);
      return this.expectancy;
    }     

    jupiterYearsLeftOrOver() {
      let jupiterExpectancy = parseInt(Math.round((this.yearsOver()/this.jupiter * 100)/100));
      if(jupiterExpectancy >= 0) {
        return `"You are ${jupiterExpectancy} years over your expected years. Go have more fun!`;
      } else if (jupiterExpectancy < 0) {
        return `"You have ${(Math.abs(jupiterExpectancy))} years left. Go have more fun!"`
      }
    } 

    venusAge() {
      this.age = Math.round(((this.earthYears/this.venus) * 100)/100);
      return this.age;
    }

    venusExpectancy() {
      this.expectancy = Math.round(((this.earthExpectancy/this.venus)*100)/100);
      return this.expectancy;
    }    

    venusYearsLeftOrOver() {
      let venusExpectancy = parseInt(Math.round((this.yearsOver()/this.venus * 100)/100));
      if(venusExpectancy >= 0) {
        return `"You are ${venusExpectancy} years over your expected years. Go have more fun!`;
      } else if (venusExpectancy < 0) {
        return `"You have ${(Math.abs(venusExpectancy))} years left. Go have more fun!"`
      }
    }
  }

