class Fruit {
    // Produce a fruit
    constructor () {
      this.quality = this.getQuality()
    }
  
    getQuality(){
      let condition = Math.round(Math.random()) // sebagai parameter class Fruit; 0 "bad" or 1 "good"
      if(condition === 0){
          return "bad"
      } else {
          return "good"
      }
    }
  }

module.exports = Fruit