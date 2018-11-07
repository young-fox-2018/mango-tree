"use strict"

const Pear = require('./pear')
const FruitTree = require('./fruit_tree')

class PearTree extends FruitTree{
  constructor() {
    super()
  }

  // Produce some pears
  produceFruits() {
    if (this.age >= this.matureAge) {
      for (let i = 0; i <= this.random(8, 20); i++) {
        let pear = new Pear()
        this.fruits.push(pear)
      }
    }
  }
}

module.exports = PearTree