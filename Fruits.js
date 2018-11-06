const badGood = ['good','bad']
class Fruit {
    // Produce a fruit
    constructor () {
      this.quality = badGood[Math.floor(Math.random() * 2)]
    }
}

module.exports = Fruit