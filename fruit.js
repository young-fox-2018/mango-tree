class Fruit {
    // Produce fruit
    constructor () {
        this._quality = this.randomQuality()
    }
    randomQuality() {
        let dice = Math.floor(Math.random() * 2)
        if (dice == 1) {
          return this._quality = "good"
        } else {
          return this._quality = "bad"
        }
    }
  }
  
module.exports = Fruit  