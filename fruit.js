class Fruit {
    // Produce a mango
    constructor () {
      this._quality = this.randomQuality()
    }

    get quality() {
      return this._quality
    }
  
    randomQuality() {
      let random = Math.random()
      if (random <= 0.5) {
        return 'bad'
      }
      else {
        return 'good'
      }
    }
  }

  module.exports = Fruit