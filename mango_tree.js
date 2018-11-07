"use strict"

const Mango = require('./mango')
const FruitTree = require('./fruit_tree')

class MangoTree extends FruitTree {
  constructor() {
    super()
  }

  // Produce some mangoes
  produceFruits() {
    if (this.age >= this.matureAge) {
      for (let i = 0; i <= this.random(8, 20); i++) {
        let mango = new Mango()
        this.fruits.push(mango)
      }
    }
  }
}

module.exports = MangoTree